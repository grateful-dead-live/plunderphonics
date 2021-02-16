import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { AutoDj, DecisionType, TransitionType } from 'auto-dj';
import { DeadApiService } from './dead-api.service';
import { DeadFeatureService } from './dead-feature.service';
import { LiveFeatureService } from './live-feature.service';
import { PlayerService } from './stream-player.service';
import { SongDetails, DeadEventInfo } from './types';
//import * as ALIGNMENT from '../assets/meandmyuncle.json';
import ALIGNMENT from '../assets/box of rain-output.json';
//import * as ALIGNMENT from '../assets/brokedown palace-output.json';
//import * as ALIGNMENT from '../assets/casey jones-output.json';
//import * as ALIGNMENT from '../assets/china cat sunflower-output.json';
//import * as ALIGNMENT from '../assets/china doll-output.json';
//////import * as ALIGNMENT from '../assets/cosmic charlie-output.json';

interface Alignment {
  title: string,
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
'https://i.ebayimg.com/images/g/alAAAOSw4A5Y2eI9/s-l300.jpg']

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
  private SONGNAME = 'Box of Rain';
  private COUNT = 30;
  private SKIP = 3;
  private CHUNK_LENGTH = 60;
  private CHUNK_START = 30;
  private dj: AutoDj;
  protected songDetails: SongDetails;
  protected currentImages: string[][] = [null, null];
  protected currentCaptions: string[] = ['', ''];
  protected imageStates: string[] = ['out', 'in']
  protected currentImagesIndex = 0;
  private alignment: Alignment = ALIGNMENT;
  private player: PlayerService = new PlayerService();

  constructor(private apiService: DeadApiService,
      featureService: DeadFeatureService, private activatedRoute: ActivatedRoute) {
    this.dj = new AutoDj({//featureService: featureService,
        decisionType: DecisionType.Default,
        defaultTransitionType: TransitionType.Crossfade,
        scheduleAheadTime: 4,
        loadAheadTime: 6,
        useWorkers: false
      });
    this.activatedRoute.queryParams.subscribe(params => {
        this.SONGNAME = params['song'] || this.SONGNAME// || 'Looks Like Rain';
        console.log(this.SONGNAME); // Print the parameter to the console.
    });
  }

  async ngOnInit() {
    await this.dj.isReady();
    //this.eventInfos = await this.apiService.getEvents();
    //console.log(this.eventInfos)
    //const song = _.toLower(this.SONGNAME).split(' ').join('');
    if (this.SONGNAME) {
      this.songDetails = await this.apiService
        .getDiachronicSongDetails(this.SONGNAME, this.COUNT, this.SKIP);
    }
  }

  private async streamCoherently() {
    console.log("STREAM", this.alignment)
    this.SONGNAME = this.alignment.title;
    console.log(this.SONGNAME)
    const featureService = new LiveFeatureService();
    const versionsPlayed: number[] = [];
    const BARS = 2;
    const TRANS = 1; //two transition, two alone, two transition
    const OFFSET = 0;
    const segments = _.range(0,
        Math.floor((this.alignment.timeline.length-OFFSET)/(BARS+TRANS)-1)).map(i => {
      const START = OFFSET+(i*(BARS+TRANS));
      const starts = this.alignment.timeline[START];
      const ends = this.alignment.timeline[START+BARS+(2*TRANS)];
      const versions = _.intersection(
        ...[starts, ends].map(b => b.map(n => n.version)))
        .filter(v => !versionsPlayed.includes(v));
      if (versions.length) {
        const version = _.sample(versions);
        versionsPlayed.push(version);
        const start = starts.filter(n => n.version === version)[0].time;
        const end = ends.filter(n => n.version === version)[0].time;
        const audio = this.alignment.versions[version];
        const audioUri = this.apiService.toLmaUri(audio.split('/')[0], audio.split('/')[1]);
        const offset = this.alignment.segments[version][start].start;
        const bars = _.range(start, end+1).map(i =>
          this.alignment.segments[version][i].start)// - offset);
        let beats = _.flatten(bars.slice(0,-1).map((b,i) =>
          _.range(0,4).map(j => b+j*(bars[i+1]-b)/4)));
        beats = beats.map(b => b / this.alignment.tunings[i]);
        //console.log(beats[0])
        return {uri: audioUri, beats: beats};
      }
    }).filter(a => a);
    this.player.play(segments);
  }

  /*private async playCoherently() {
    this.SONGNAME = this.alignment.title;
    console.log(this.SONGNAME)
    const featureService = new LiveFeatureService();
    const versionsPlayed: number[] = [];
    const BARS = 6;
    const TRANS = 1; //two transition, two alone, two transition
    const OFFSET = 0;
    const audioChunks = _.range(0,
        Math.floor((this.alignment.timeline.length-OFFSET)/(BARS+TRANS)-1)).map(i => {
      const START = OFFSET+(i*(BARS+TRANS));
      const starts = this.alignment.timeline[START];
      const ends = this.alignment.timeline[START+BARS+(2*TRANS)];
      const versions = _.intersection(
        ...[starts, ends].map(b => b.map(n => n.version)))
        .filter(v => !versionsPlayed.includes(v));
      if (versions.length) {
        const version = _.sample(versions);
        //const version = versions[0];
        versionsPlayed.push(version);
        const start = starts.filter(n => n.version === version)[0].time;
        const end = ends.filter(n => n.version === version)[0].time;
        const audio = this.alignment.versions[version];
        const audioUri = this.apiService.toLmaUri(audio.split('/')[0], audio.split('/')[1]);
        /*const audioUri = this.apiService.toChunkUri(
          audio.split('/')[0], audio.split('/')[1],
          this.alignment.segments[version][start].start,
          this.alignment.segments[version][end].start);*
        const offset = this.alignment.segments[version][start].start;
        const bars = _.range(start, end+1).map(i =>
          this.alignment.segments[version][i].start)// - offset);
        let beats = _.flatten(bars.slice(0,-1).map((b,i) =>
          _.range(0,4).map(j => b+j*(bars[i+1]-b)/4)));
        beats = beats.map(b => b / this.alignment.tunings[i]);
        //console.log(beats[0])
        featureService.setBeats(audioUri, beats);
        return audioUri;
      }
    }).filter(a => a);
    this.dj.setFeatureService(featureService);
    this.dj.playDjSet(audioChunks, BARS+(TRANS*2), false, TRANS);

    let index = 0;
    this.dj.getTransitionObservable().subscribe(transition => {
      console.log(transition)
      if (transition && transition.names) {
        //http://archive.org/download/gd1990-09-15.sbd.martman.7746.sbefail.shnf/gd1990-09-15d1t09.mp3
        const rec = audioChunks[index].split('/').slice(-2)[0];
        console.log(rec)
        const eventId = this.eventInfos.filter(i => i.recordings.some(r => r.etreeId === rec))[0];
        this.nextImage(eventId.id);
        index++;
      }
    });
  }*/

  protected async nextImage(eventId: string) {
    const info = this.eventInfos.filter(e => e.id === eventId)[0];
    const details = await this.apiService.getEventDetails(eventId);
    let infoStrings = [info.date];
    if (info.venue) infoStrings.push(info.venue);
    if (info.location) infoStrings.push(info.location);
    const i = this.currentImagesIndex % 2;
    this.currentCaptions[i] = infoStrings.join(', ');
    this.currentImages[i] = _.concat(
      [details.venue.thumbnail, details.location.thumbnail],
      details.artifacts.map(a => a.thumbnail || a.image))
      .filter(i=>i).slice(0,4);
    setTimeout(() => this.toggleState(), 1000); //images take time to load!
  }

  protected toggleState() {
    this.imageStates.forEach((s,i) => this.imageStates[i] = s === 'in' ? 'out' : 'in');
    this.currentImagesIndex++;
  }

}
