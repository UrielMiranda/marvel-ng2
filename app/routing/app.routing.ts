/**
 * Created by uriel.miranda on 04/10/2016.
 */
import {Routes, RouterModule } from '@angular/router';
import {CharactersComponent} from "../characters/character.component";
import { HeroeComponent } from "../hero/heroe.component";

const appRoutes: Routes = [
    {path:"", component: CharactersComponent},
    {path:"hero/:id", component: HeroeComponent},
    {path:"**", component: CharactersComponent}

];

export const appRoutingProviders: any[]= [];

export const routing = RouterModule.forRoot(appRoutes);