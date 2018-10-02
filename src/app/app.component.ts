import { Component, OnInit } from '@angular/core';
import { DeadApiService } from './dead-api.service';
import { DeadFeatureService } from './dead-feature.service';
import { AutoDj, DecisionType, TransitionType } from 'auto-dj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private dj: AutoDj;

  constructor(private apiService: DeadApiService,
      featureService: DeadFeatureService) {
    this.dj = new AutoDj(featureService, DecisionType.Default, undefined,
      TransitionType.Beatmatch);
  }

  async ngOnInit() {
    await this.dj.isReady();
    let audioUris = await this.apiService.getDiachronicVersionsAudio('goodlovin');
    //http://localhost:8060/audiochunk?filename=http://archive.org/download/gd1985-03-13.sbd.miller.77347.flac16/gd85-03-13d1t03.mp3&fromsecond=4&tosecond=6
    audioUris = audioUris.map(a =>
      encodeURI('http://localhost:8060/audiochunk?filename='+a));
    this.dj.playDjSet(audioUris.slice(0,3), 12, true); //bars per song, cue point auto*/
  }

}
