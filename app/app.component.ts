import { Component, OnInit } from '@angular/core';

import {HeroDetailComponent} from './components/hero-detail.component';

import { Hero } from './models/hero';

import {HeroService} from './services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  styleUrls: ["css/app.css"],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements  OnInit{
  
  constructor(private heroService: HeroService) {}
  
  selectedHero: Hero;
  public heroes: Hero[];
  title = "Tour of Heroes";
  
  ngOnInit() {
    this.getHeroes();
  }
  
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero; 
  }
}

