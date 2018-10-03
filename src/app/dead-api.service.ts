import { Injectable } from '@angular/core';

export interface DeadEvent {
  id: string,
  date: string,
  location: string
}

export const API_URL = "http://localhost:8060/"//"https://grateful-dead-api.herokuapp.com/";//"http://localhost:8060/";

@Injectable()
export class DeadApiService {

  constructor() {}

  async getEvents(): Promise<DeadEvent[]> {
    return this.getJsonFromApi('events');
  }

  async getVenue(eventId: string): Promise<string> {
    return this.getJsonFromApi('venue?event='+encodeURIComponent(eventId));
  }

  async getPosters(eventId: string): Promise<string> {
    return this.getJsonFromApi('posters?event='+encodeURIComponent(eventId));
  }

  getTickets(eventId: string): Promise<string> {
    return this.getJsonFromApi('tickets?event='+encodeURIComponent(eventId));
  }

  getLocation(eventId: string): Promise<string> {
    return this.getJsonFromApi('location?event='+encodeURIComponent(eventId));
  }

  getWeather(eventId: string): Promise<string> {
    return this.getJsonFromApi('weather?event='+encodeURIComponent(eventId));
  }

  getSetlist(eventId: string): Promise<string[]> {
    return this.getJsonFromApi('setlist?event='+encodeURIComponent(eventId));
  }

  getRecordings(eventId: string): Promise<string[]> {
    return this.getJsonFromApi('recordings?event='+encodeURIComponent(eventId));
  }

  getPerformers(eventId: string): Promise<{}[]> {
    return this.getJsonFromApi('performers?event='+encodeURIComponent(eventId));
  }

  getEtreeInfo(recordingId: string): Promise<{}> {
    return this.getJsonFromApi('etreeinfo?recording='+encodeURIComponent(recordingId));
  }

  getFeatureSummary(audioUri: string): Promise<{}> {
    return this.getJsonFromApi('featuresummary?audiouri='+encodeURIComponent(audioUri));
  }

  getDiachronicVersionsAudio(songName: string, count = 100, skip = 0): Promise<string[]> {
    return this.getJsonFromApi('diachronic?songname='+encodeURIComponent(songName)
      +"&count="+count+"&skip="+skip);
  }

  getEventInfo(audioUri: string): Promise<string[]> {
    return this.getJsonFromApi('eventinfo?audiouri='+encodeURIComponent(audioUri));
  }

  getJsonFromApi(path: string): Promise<any> {
    return fetch(API_URL+path)
      .then(r => r.text())
      .then(t => JSON.parse(t))
      .catch(e => console.log(e));
  }

}
