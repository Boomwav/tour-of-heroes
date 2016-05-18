import { Component } from '@angular/core';

import {HeroDetailComponent} from './components/hero-detail.component';

import { Hero } from './models/hero';

@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  styleUrls: ["css/app.css"],
  directives: [HeroDetailComponent]
})
export class AppComponent {
  selectedHero: Hero;
  public heroes = HEROES;
  title = "Tour of Heroes";
  
  onSelect(hero: Hero) {
    this.selectedHero = hero; 
  }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];