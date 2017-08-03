import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private _activateroute:ActivatedRoute,
              private _heroeService: HeroesService) {
      this._activateroute.params.subscribe( params => {
          this.heroe = this._heroeService.getHeroe( params ['id'] );
          if(this.heroe.casa == 'Marvel'){
            this.heroe.casa = "assets/image/Marvel.png"
          }else if (this.heroe.casa == "DC"){
            this.heroe.casa = "assets/image/DC.png"
          }
      });
   }


}
