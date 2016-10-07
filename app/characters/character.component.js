"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by uriel.miranda on 04/10/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var marvel_service_1 = require("../services/marvel.service");
var CharactersComponent = (function () {
    function CharactersComponent(marvelservice, router) {
        this.marvelservice = marvelservice;
        this.router = router;
        this.rounded = true;
    }
    CharactersComponent.prototype.listHeroes = function () {
        var _this = this;
        this.marvelservice.marvelCharacters()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    CharactersComponent.prototype.ngOnInit = function () {
        this.listHeroes();
    };
    CharactersComponent.prototype.clickHero = function (hero) {
        this.router.navigate(['/hero'], hero.id);
    };
    CharactersComponent = __decorate([
        core_1.Component({
            selector: "super-heroe",
            templateUrl: '/app/characters/characters.component.html',
        }), 
        __metadata('design:paramtypes', [marvel_service_1.MarvelService, router_1.Router])
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;
//# sourceMappingURL=character.component.js.map