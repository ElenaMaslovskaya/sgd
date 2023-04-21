import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagramm01',
  templateUrl: './diagramm01.component.html',
  styleUrls: ['./diagramm01.component.css'],
})
export class Diagramm01Component implements OnInit {
  //das Objekt für das Diagramm
  config: ZingchartAngular.graphset = {
    //der Typ des Diagramms
    type: 'bar',
    //der Titel
    title: { text: 'Mein erstes Diagramm' },
    //die Werte werden als Array übergeben
    series: [
      {
        values: [1, 2, 3, 4, 5, 4, 3, 2, 1],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
