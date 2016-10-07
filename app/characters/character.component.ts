/**
 * Created by uriel.miranda on 04/10/2016.
 */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MarvelService } from "../services/marvel.service";

@Component({
    selector:"super-heroe",
    templateUrl: '/app/characters/characters.component.html',
})

export class CharactersComponent implements OnInit{
    heroes:Array<Object>;
    rounded: Boolean = true;

    constructor(private marvelservice: MarvelService,
                private router: Router){
    }

    listHeroes(){
        this.marvelservice.marvelCharacters()
            .then(heroes => this.heroes = heroes);
    }

    ngOnInit(){
        this.listHeroes();

    }

    clickHero(hero){
        this.router.navigate(['/hero'], hero.id)
    }
}