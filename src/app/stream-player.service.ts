import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export interface Track {
  title: string,
  uri: string,
  waveform: string,
  show_id: string,
  etree_id: string,
  recording_id: string,
  song_id: string,
  track: string
}

class AudioSegment {
  
  private audio: HTMLAudioElement;
  private beats: number[];
  
  constructor(segment: {uri: string, beats: number[]}) {
    console.log(segment);
    this.beats = segment.beats;
    this.audio = new Audio(segment.uri);
    this.audio.preload = 'none';
    this.preload()
  }
  
  //preload by playing muted
  private preload() {
    console.log("load", _.last(this.audio.src.split('/')))
    this.reset();
    this.audio.muted = true;
    this.audio.play();
  }
  
  async play() {
    console.log("play", _.last(this.audio.src.split('/')))
    this.audio.pause();
    this.audio.muted = false;
    this.reset();
    this.audio.play();
    return new Promise(resolve => this.audio.ontimeupdate = () => {
      if (this.audio.currentTime > this.beats[this.beats.length-1]) {
        console.log("reso", _.last(this.audio.src.split('/')))
        resolve();
      }
      if (this.audio.currentTime > this.beats[this.beats.length-1]) {
        console.log("done", _.last(this.audio.src.split('/')))
        this.audio.pause();
        this.reset();
      }
    });
  }
  
  reset() {
    this.audio.currentTime = this.beats[0];
  }
}

@Injectable()
export class PlayerService {
  
  public maxTime: number = 0;
  public currentTime: number = 0;
  private currentAudio: HTMLAudioElement;
  public playlist: Track[] = [];
  private currentTrackIndex = 0;
  public muted = false;
  public paused = true;
  
  constructor() {}

  deleteFromPlaylist(i){
    this.playlist.splice(i, 1);
    this.storePlaylist();
  }
  
  getCurrentTrack() {
    return this.playlist[this.currentTrackIndex]
      || {title:"", uri:"", waveform:""};
  }
  
  async play(segments: {uri: string, beats: number[]}[]) {
    let nextSegment = new AudioSegment(segments[0]);
    for (let s of segments.slice(1)) {
      const currentSegment = nextSegment;
      nextSegment = new AudioSegment(s);
      await currentSegment.play();
    }
    this.reset();
  }
  
  stop() {
    if (this.currentAudio) {
      this.reset();
    }
  }
  
  setTime(time: number) {
    if (this.currentAudio && time != Math.floor(this.currentAudio.currentTime)) {
      this.currentAudio.currentTime = time;
    }
  }
  
  toggleMute() {
    this.muted = !this.muted;
    if (this.currentAudio) {
      this.currentAudio.muted = this.muted;
    }
  }
  
  isMuted() {
    return this.muted;
  }
  
  private reset() {
    this.currentAudio.ontimeupdate = null;
    this.currentAudio.pause();
    this.currentAudio = null;
    this.currentTime = 0;
    this.paused = true;
  }

  volume(v) {
    if (this.currentAudio) {
      this.currentAudio.volume = v / 100;
    }
  }
  
  formatTime(d) {
    function z(n){return (n<10?'0':'')+n}
    return z(d.getMonth()+1) + '-' + z(d.getDate()) + '-' + (d.getYear()+1900) + ' ' +  d.getHours() + ':' + z(d.getMinutes());
  }

  storePlaylist(){
    localStorage.setItem('playlist', btoa(JSON.stringify(this.playlist)));
  }
  
  removePlaylistFromStorage(){
    localStorage.removeItem('playlist');
  }

  loadPlaylistFromsStorage(){
    var p = localStorage.getItem('playlist');
    if (p) this.playlist = JSON.parse(atob(p));
  }

}