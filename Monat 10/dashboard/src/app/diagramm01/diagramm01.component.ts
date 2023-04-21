import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagramm01',
  templateUrl: './diagramm01.component.html',
  styleUrls: ['./diagramm01.component.css'],
})
export class Diagramm01Component implements OnInit {
  //das Objekt für das Diagramm
  balkendiagramm: ZingchartAngular.graphset = {
    //der Typ des Diagramms
    type: 'bar',
    //der Hintergrund ist transparent
    'background-color': 'none',
    //die Werte werden als Array übergeben
    series: [{ values: [1, 2, 3, 4, 5, 4, 3, 2, 1] }],
  };

  constructor() { }

  ngOnInit(): void {
    
  }
}
