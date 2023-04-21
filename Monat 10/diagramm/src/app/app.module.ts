import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Diagramm01Component } from './diagramm01/diagramm01.component';

//für ZingChart
import { ZingchartAngularModule } from 'zingchart-angular';

@NgModule({
  declarations: [
    AppComponent,
    Diagramm01Component
  ],
  imports: [
    BrowserModule,
    //für ZingChart
    ZingchartAngularModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
