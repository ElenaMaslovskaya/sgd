import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Diagramm01Component } from './diagramm01/diagramm01.component';
import { Diagramm02Component } from './diagramm02/diagramm02.component';
import { Diagramm03Component } from './diagramm03/diagramm03.component';

//für die Material-Komponente
import { MatCardModule } from '@angular/material/card';
//für ZingChart
import { ZingchartAngularModule } from 'zingchart-angular';

@NgModule({
  declarations: [
    AppComponent,
    Diagramm01Component,
    Diagramm02Component,
    Diagramm03Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //für die Material-Komponente
    MatCardModule,
    //für ZingChart
    ZingchartAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
