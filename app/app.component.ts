import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

import {HeroService} from "./services/hero.service";
import {HeroesComponent} from './components/heroes.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        HeroesComponent],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@Routes([
    
])
export class AppComponent {
    title = "Tour of Heroes";
}