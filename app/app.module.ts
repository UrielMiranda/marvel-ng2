/**
 * Created by uriel.miranda on 03/10/2016.
 */
import { NgModule } from "@angular/core";
import { HttpModule} from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {CharactersComponent} from "./characters/character.component";
import {HeroeComponent} from "./hero/heroe.component";
import {routing, appRoutingProviders} from "./routing/app.routing";
import {MarvelService} from "./services/marvel.service";


@NgModule({
    imports: [ BrowserModule, HttpModule, routing ],
    declarations: [AppComponent, CharactersComponent, HeroeComponent],
    bootstrap:[AppComponent],
    providers: [appRoutingProviders, MarvelService]
})

export class AppModule{}