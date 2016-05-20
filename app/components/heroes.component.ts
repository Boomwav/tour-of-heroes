import { Component, OnInit } from '@angular/core';

import {HeroDetailComponent} from '../components/hero-detail.component';

import { Hero } from '../models/hero';
import { HeroService} from '../services/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: "app/components/heroes.component.html",
  styleUrls: ["css/heroes.css"],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements  OnInit{
  
  constructor(private heroService: HeroService) { }
  
  selectedHero: Hero;
  public heroes: Hero[];
  
  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero; 
  }
}

