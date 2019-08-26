import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { AutoDj, DecisionType, TransitionType } from 'auto-dj';
import { DeadApiService } from './dead-api.service';
import { DeadFeatureService } from './dead-feature.service';
import { SongDetails, DeadEventInfo } from './types';


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
  private COUNT = 50;
  private SKIP = 3;
  private dj: AutoDj;
  protected songDetails: SongDetails;
  protected currentImages: string[][] = [null, null];
  protected currentCaptions: string[] = ['', ''];
  protected imageStates: string[] = ['out', 'in']
  protected currentImagesIndex = 0;

  constructor(private apiService: DeadApiService,
      featureService: DeadFeatureService, private activatedRoute: ActivatedRoute) {
    this.dj = new AutoDj(null, DecisionType.Default, undefined,
      TransitionType.Crossfade);
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
    const audioUris = _.values(_.mapValues(this.songDetails.audio,
      (a,r) => this.apiService.toChunkUri(r, a[0].filename)));
    this.dj.playDjSet(audioUris, 12, true); //bars per song, cue point auto*/
    //this.dj.transitionToTrack(audioUris[0]);
    let index = 0;
    this.dj.getTransitionObservable().subscribe(transition => {
      if (transition && transition.names) {
        this.nextImage(this.songDetails.eventIds[index]);
        index++;
      }
    });
  }

  async nextImage(eventId: string) {
    const info = this.eventInfos.filter(e => e.id === eventId)[0];
    let infoStrings = [info.date];
    if (info.venue) infoStrings.push(info.venue);
    if (info.location) infoStrings.push(info.location);
    const i = this.currentImagesIndex % 2;
    this.currentCaptions[i] = infoStrings.join(', ');
    this.currentImages[i] = [info.ticket, info.poster, info.photo];
    setTimeout(() => this.toggleState(), 1000); //images take time to load!
  }

  toggleState() {
    this.imageStates.forEach((s,i) => this.imageStates[i] = s === 'in' ? 'out' : 'in');
    this.currentImagesIndex++;
  }


}
