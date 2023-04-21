import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagramm02',
  templateUrl: './diagramm02.component.html',
  styleUrls: ['./diagramm02.component.css'],
})
export class Diagramm02Component implements OnInit {
  //das Objekt für das Diagramm
  liniendiagramm: ZingchartAngular.graphset = {
    //der Typ des Diagramms
    type: 'line',
    //der Hintergrund ist transparent
    'background-color': 'none',
    //die Werte werden als Array übergeben
    series: [{ values: [10, 20, 30, 35, 25] }],
  };

  constructor() { }

  ngOnInit(): void {
    
  }
}
