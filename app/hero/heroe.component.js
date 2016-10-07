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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var marvel_service_1 = require("../services/marvel.service");
var HeroeComponent = (function () {
    function HeroeComponent(route, marvelservice, router) {
        this.route = route;
        this.marvelservice = marvelservice;
        this.router = router;
    }
    HeroeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.marvelservice.infoCharacter(id)
            .then(function (hero) { return _this.hero = hero; });
    };
    HeroeComponent.prototype.volver = function () {
        this.router.navigate(['/']);
    };
    HeroeComponent = __decorate([
        core_1.Component({
            templateUrl: "/app/hero/heroe.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, marvel_service_1.MarvelService, router_1.Router])
    ], HeroeComponent);
    return HeroeComponent;
}());
exports.HeroeComponent = HeroeComponent;
//# sourceMappingURL=heroe.component.js.map