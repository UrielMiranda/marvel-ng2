/**
 * Created by uriel.miranda on 04/10/2016.
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MarvelService} from "../services/marvel.service";

@Component({
    templateUrl: "/app/hero/heroe.component.html"
})

export class HeroeComponent{
    hero:Object;

    constructor(private route: ActivatedRoute,
                private marvelservice: MarvelService,
                private router: Router){

    }

    ngOnInit(){
        let id = +this.route.snapshot.params['id'];
        this.marvelservice.infoCharacter(id)
            .then(hero => this.hero = hero);
    }
    volver(){
        this.router.navigate(['/']);
    }
}