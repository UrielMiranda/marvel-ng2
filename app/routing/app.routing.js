"use strict";
/**
 * Created by uriel.miranda on 04/10/2016.
 */
var router_1 = require('@angular/router');
var character_component_1 = require("../characters/character.component");
var heroe_component_1 = require("../hero/heroe.component");
var appRoutes = [
    { path: "", component: character_component_1.CharactersComponent },
    { path: "hero/:id", component: heroe_component_1.HeroeComponent },
    { path: "**", component: character_component_1.CharactersComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map