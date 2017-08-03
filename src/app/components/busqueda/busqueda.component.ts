import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = [];
  Termino:string;
  constructor(private activateRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private _router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.Termino = params ['termino'];
      this.heroes = this.heroesService.buscarHeroe( params['termino'] );
      console.log( this.heroes );
    });

  }

  verHeroe(idx:number){
    this._router.navigate( ['/heroe',idx] );
  }

}
