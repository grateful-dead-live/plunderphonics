import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { DeadApiService, API_URL } from './dead-api.service';
import { DeadFeatureService } from './dead-feature.service';
import { AutoDj, DecisionType, TransitionType } from 'auto-dj';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';


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
  private SONGNAME;
  private COUNT = 50;
  private SKIP = 3;
  private audioUris: string[];
  private dj: AutoDj;
  protected currentImages: string[][] = [null, null];
  protected currentCaptions: string[] = ['', ''];
  protected imageStates: string[] = ['out', 'in']
  protected currentImagesIndex = 0;

  constructor(private apiService: DeadApiService,
      featureService: DeadFeatureService, private activatedRoute: ActivatedRoute) {
    this.dj = new AutoDj(featureService, DecisionType.Default, undefined,
      TransitionType.Beatmatch);
      this.activatedRoute.queryParams.subscribe(params => {
        this.SONGNAME = params['song'];
        console.log(this.SONGNAME); // Print the parameter to the console.

    });


  }

  async ngOnInit() {
    await this.dj.isReady();
    const song = _.toLower(this.SONGNAME).split(' ').join('');
    this.audioUris = (await this.apiService.getDiachronicVersionsAudio(song, this.COUNT, this.SKIP));
    this.audioUris = this.audioUris.map(a =>
      encodeURI(API_URL+'audiochunk?filename='+a));
    this.dj.playDjSet(this.audioUris, 12, true); //bars per song, cue point auto*/
    this.dj.getTransitionObservable().subscribe(transition => {
      if (transition && transition.names) {
        this.nextImage(transition.names[0]);
      }
    });
  }

  async nextImage(audioUri: string) {
    const info = await this.apiService.getEventInfo(audioUri);
    let infoStrings = [info['date']];
    if (info['venue']) infoStrings.push(info['venue']);
    if (info['location']) infoStrings.push(info['location']);
    const i = this.currentImagesIndex % 2;
    this.currentCaptions[i] = infoStrings.join(', ');
    this.currentImages[i] = info['images'] ? info['images'].slice(0,3) : undefined;
    setTimeout(() => this.toggleState(), 1000); //images take time to load!
  }

  toggleState() {
    this.imageStates.forEach((s,i) => this.imageStates[i] = s === 'in' ? 'out' : 'in');
    this.currentImagesIndex++;
  }


}
