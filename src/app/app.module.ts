import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DeadApiService } from './dead-api.service';
import { DeadFeatureService } from './dead-feature.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DeadApiService, DeadFeatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
