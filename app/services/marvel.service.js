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
var http_1 = require("@angular/http");
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var MarvelService = (function () {
    function MarvelService(http) {
        this.http = http;
    }
    MarvelService.prototype.marvelCharacters = function () {
        var url = 'http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=4339f97c8d2f4e6b58223609ccd215b8&hash=a00641a5c54db3011f573060d17696d3';
        return this.http.get(url)
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data.results; })
            .catch(this.oneError);
    };
    MarvelService.prototype.infoCharacter = function (id) {
        var url = "http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=4339f97c8d2f4e6b58223609ccd215b8&hash=a00641a5c54db3011f573060d17696d3&id=" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.oneError);
    };
    MarvelService.prototype.oneError = function (error) {
        console.log("Ocurrió un error con el llamado a Marvel API");
        return Promise.reject(error.message || error);
    };
    MarvelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MarvelService);
    return MarvelService;
}());
exports.MarvelService = MarvelService;
//# sourceMappingURL=marvel.service.js.map