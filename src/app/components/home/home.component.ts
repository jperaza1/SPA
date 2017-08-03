import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  mensaje:string = "Te Presentamos la Mejor app de Comics de LatinoAmerica";
  titulo:string = "ComicApp";
  constructor() { }

  ngOnInit() {
  }

}
