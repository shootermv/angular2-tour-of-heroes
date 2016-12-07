import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  loading:boolean = false;

  items: FirebaseListObservable<Hero[]>;
   //items:any[] = [];



  constructor(
    private af: AngularFire,
    private router: Router,
    private heroService: HeroService) {

   }

  getHeroes(): void {

  
    this.loading = true;
    this.heroService
      .getHeroes()
      .subscribe((heroes) => {
        
        this.heroes = heroes;
        this.loading = false;
      },error => this.error = error)
     
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
   
    this.gotoDetail()
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.$key]);
  }
}
