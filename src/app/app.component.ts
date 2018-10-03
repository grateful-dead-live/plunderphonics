import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { DeadApiService, API_URL } from './dead-api.service';
import { DeadFeatureService } from './dead-feature.service';
import { AutoDj, DecisionType, TransitionType } from 'auto-dj';
import { trigger, style, animate, transition, state } from '@angular/animations';

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

  private SONGNAME = 'Me and My Uncle';
  private COUNT = 50;
  private SKIP = 2;
  private audioUris: string[];
  private dj: AutoDj;
  protected currentImages: string[] = [null, null];
  protected currentCaptions: string[] = ['', ''];
  protected imageStates: string[] = ['out', 'in']
  protected currentImagesIndex = 0;

  constructor(private apiService: DeadApiService,
      featureService: DeadFeatureService) {
    this.dj = new AutoDj(featureService, DecisionType.Default, undefined,
      TransitionType.Beatmatch);
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
    this.currentImages[i] = info['images'] ? info['images'][0] : undefined;
    setTimeout(() => this.toggleState(), 1000); //images take time to load!
  }

  toggleState() {
    this.imageStates.forEach((s,i) => this.imageStates[i] = s === 'in' ? 'out' : 'in');
    this.currentImagesIndex++;
  }

}
