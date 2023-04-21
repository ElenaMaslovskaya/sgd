import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagramm03',
  templateUrl: './diagramm03.component.html',
  styleUrls: ['./diagramm03.component.css'],
})
export class Diagramm03Component implements OnInit {
  //das Objekt für das Diagramm
  tacho: ZingchartAngular.graphset = {
    //der Typ des Diagramms
    type: 'gauge',
    //die Werte werden als Array übergeben
    series: [{ values: [75] }],
  };
  constructor() { }
  
  ngOnInit(): void {
    
  }
}
