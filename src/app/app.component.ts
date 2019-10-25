import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { AutoDj, DecisionType, TransitionType } from 'auto-dj';
import { DeadApiService } from './dead-api.service';
import { DeadFeatureService } from './dead-feature.service';
import { LiveFeatureService } from './live-feature.service';
import { SongDetails, DeadEventInfo } from './types';
import * as ALIGNMENT from '../assets/meandmyuncle.json';

interface Alignment {
  versions: string[],
  tunings: number[],
  segments: Segment[][],
  timeline: SegmentNode[][]
}

interface Segment {
  start: number,
  duration: number
}

export interface SegmentNode {
  point: number[],
  version: number,
  time: number
}

const TEST = ['https://images-na.ssl-images-amazon.com/images/I/91PMUsUyKzL._SL1500_.jpg',
'https://images.fineartamerica.com/images-medium-large-5/grateful-dead-fantasy-amanda-paul.jpg',
'https://i.ebayimg.com/images/g/alAAAOSw4A5Y2eI9/s-l300.jpg'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ 'opacity': '1' })),
      state('out', style({ 'opacity': '0' })),
      transition('* <=> *', [
        animate(2000)
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  //private SONGNAME = 'Me and My Uncle';
  //private SONGNAME = 'Sugar Magnolia';
  //private SONGNAME = 'Playing in the Band';
  //private SONGNAME = 'Jack Straw';
  //private SONGNAME = 'Truckin';
  private eventInfos: DeadEventInfo[];
  private SONGNAME;
  private COUNT = 30;
  private SKIP = 2;
  private CHUNK_LENGTH = 60;
  private CHUNK_START = 30;
  private dj: AutoDj;
  protected songDetails: SongDetails;
  protected currentImages: string[][] = [null, null];
  protected currentCaptions: string[] = ['', ''];
  protected imageStates: string[] = ['out', 'in']
  protected currentImagesIndex = 0;
  private alignment: Alignment = ALIGNMENT.default;

  constructor(private apiService: DeadApiService,
      featureService: DeadFeatureService, private activatedRoute: ActivatedRoute) {
    this.dj = new AutoDj({featureService: featureService,
        decisionType: DecisionType.Default,
        defaultTransitionType: TransitionType.Slam});
      this.activatedRoute.queryParams.subscribe(params => {
        this.SONGNAME = params['song'] || 'Looks Like Rain';
        console.log(this.SONGNAME); // Print the parameter to the console.
    });
  }

  async ngOnInit() {
    await this.dj.isReady();
    this.eventInfos = await this.apiService.getEvents();
    //const song = _.toLower(this.SONGNAME).split(' ').join('');
    this.songDetails = await this.apiService
      .getDiachronicSongDetails(this.SONGNAME, this.COUNT, this.SKIP);
    //this.playBeginnings();
    this.playCoherently();
  }
  
  private async playBeginnings() {
    const audioUris = _.values(_.mapValues(this.songDetails.audio,
      (a,r) => this.apiService.toChunkUri(r, a[0].filename, this.CHUNK_START,
        this.CHUNK_START+this.CHUNK_LENGTH)));
    console.log(audioUris[0])
    this.dj.playDjSet(audioUris, 12, true, 6); //bars per song, cue point auto
    //this.dj.transitionToTrack(audioUris[0]);
    let index = 1;
    this.dj.getTransitionObservable().subscribe(transition => {
      console.log(transition)
      if (transition && transition.names) {
        this.nextImage(this.songDetails.eventIds[index]);
        index++;
      }
    });
  }
  
  private async playCoherently() {
    const featureService = new LiveFeatureService();
    const versionsPlayed: number[] = [];
    const BARS = 4;
    const TRANS = 0; //two transition, two alone, two transition
    const OFFSET = TRANS;
    const audioChunks = _.range(0, 6).map(i => {
      const starts = this.alignment.timeline[OFFSET+(i*BARS+TRANS)-TRANS];
      const ends = this.alignment.timeline[OFFSET+((i+1)*BARS+TRANS)+TRANS];
      const versions = _.intersection(
        ...[starts, ends].map(b => b.map(n => n.version)))
        .filter(v => !versionsPlayed.includes(v));
      const version = versions[0];
      const start = starts.filter(n => n.version === version)[0].time;
      const end = ends.filter(n => n.version === version)[0].time;
      const audio = this.alignment.versions[version];
      const audioUri = this.apiService.toChunkUri(
        audio.split('/')[0], audio.split('/')[1],
        this.alignment.segments[version][start].start,
        this.alignment.segments[version][end].start);
      const offset = this.alignment.segments[version][start].start;
      const bars = _.range(start, end+1).map(i =>
        this.alignment.segments[version][i].start - offset);
      const beats = _.flatten(bars.slice(0,-1).map((b,i) =>
        _.range(0,4).map(j => b+j*(bars[i+1]-b)/4)));
      //console.log(bars, beats)
      featureService.setBeats(audioUri, beats);
      return audioUri;
    });
    this.dj.setFeatureService(featureService);
    this.dj.playDjSet(audioChunks, BARS+(TRANS*2), false, TRANS);
  }

  protected async nextImage(eventId: string) {
    const info = this.eventInfos.filter(e => e.id === eventId)[0];
    const details = await this.apiService.getEventDetails(eventId);
    let infoStrings = [info.date];
    if (info.venue) infoStrings.push(info.venue);
    if (info.location) infoStrings.push(info.location);
    const i = this.currentImagesIndex % 2;
    this.currentCaptions[i] = infoStrings.join(', ');
    this.currentImages[i] = [info.ticket, info.poster, info.photo,
      details.venue.thumbnail, details.location.thumbnail].filter(i=>i);
    setTimeout(() => this.toggleState(), 1000); //images take time to load!
  }

  protected toggleState() {
    this.imageStates.forEach((s,i) => this.imageStates[i] = s === 'in' ? 'out' : 'in');
    this.currentImagesIndex++;
  }

}
