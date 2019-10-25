import { Injectable } from '@angular/core';
import { FeatureService, Beat } from 'auto-dj';

@Injectable()
export class LiveFeatureService implements FeatureService {

  private features = new Map<string, {}>();

  async getBeats(audioUri: string) {
    return this.getFeature(audioUri, "beats");
  }

  async getKeys(audioUri: string) {
    return this.getFeature(audioUri, "key");
  }

  async getLoudnesses(audioUri: string) {
    return this.getFeature(audioUri, "loudness");
  }
  
  setBeats(audioUri: string, beats: number[]) {
    const djBeats: Beat[] = beats.map((b,j) =>
      ({time: {value: b}, label: {value: ((j%4)+1).toString()}}));
    this.setFeature(audioUri, "beats", djBeats);
  }
  
  private setFeature(audioUri: string, featureName: string, feature: any) {
    if (!this.features.has(audioUri)) {
      this.features.set(audioUri, {});
    }
    this.features.get(audioUri)[featureName] = feature;
  }
  
  private getFeature(audioUri: string, featureName: string) {
    if (this.features.has(audioUri)) {
      return this.features.get(audioUri)[featureName];
    }
  }

}