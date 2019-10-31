import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DeadEventInfo, DeadEventDetails, Location, Venue, SongInfo,
  SongDetails, ArtistDetails } from './types';

export interface Recording {
  id: string,
  url: SafeResourceUrl
}

@Injectable()
export class DeadApiService {

  //private API_URL = "https://grateful-dead-api.herokuapp.com/";
  private API_URL = "http://localhost:8060/";
  private ARCHIVE_URI = 'http://archive.org/download/';

  constructor() {}

  async getEvents(): Promise<DeadEventInfo[]> {
    return this.getJsonFromApi('events');
  }

  async getEventDetails(eventId: string): Promise<DeadEventDetails> {
    return this.getJsonFromApi('details?event='+encodeURIComponent(eventId))
  }
  
  getLocation(locationId: string): Promise<Location> {
    return this.getJsonFromApi('location?id='+encodeURIComponent(locationId));
  }
  
  getVenue(venueId: string): Promise<Venue> {
    return this.getJsonFromApi('venue?id='+encodeURIComponent(venueId));
  }
  
  getSetlist(eventId: string): Promise<SongInfo[]> {
    return this.getJsonFromApi('setlist?event='+encodeURIComponent(eventId));
  }
  
  getSong(songId: string): Promise<SongDetails> {
    return this.getJsonFromApi('song?id='+encodeURIComponent(songId));
  }
  
  getArtistDetails(artistId: string): Promise<ArtistDetails> {
    return this.getJsonFromApi('artist?id='+encodeURIComponent(artistId));
  }

  getFeatureSummary(audioUri: string): Promise<{}> {
    return this.getJsonFromApi('featuresummary?audiouri='+encodeURIComponent(audioUri));
  }
  
  getEventInfo(audioUri: string): Promise<string[]> {
    return this.getJsonFromApi('eventinfo?audiouri='+encodeURIComponent(audioUri));
  }
  
  getDiachronicSongDetails(songName: string, count = 10, skip = 0): Promise<SongDetails> {
    return this.getJsonFromApi('diachronic?songname='+encodeURIComponent(songName)
      +"&count="+count+"&skip="+skip);
  }
  
  toChunkUri(recordingId: string, filename: string, fromSecond?: number, toSecond?: number) {
    const audioUri = this.ARCHIVE_URI+recordingId+'/'+filename;
    const segmentDef = fromSecond != null && toSecond != null ?
      '&fromsecond='+fromSecond+'&tosecond='+toSecond : '';
    return encodeURI(this.API_URL+'audiochunk?filename='+audioUri+segmentDef);
  }
  
  toLmaUri(recordingId: string, filename: string) {
    return this.ARCHIVE_URI+recordingId+'/'+filename;
  }

  async getJsonFromApi(path: string): Promise<any> {
    return fetch(this.API_URL+path)
      .then(r => r.text())
      .then(t => JSON.parse(t))
      .catch(e => console.log(e));
  }

}