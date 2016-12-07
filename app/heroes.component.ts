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


  items: FirebaseListObservable<any[]>;
   //items:any[] = [];



  constructor(
    private af: AngularFire,
    private router: Router,
    private heroService: HeroService) {
    
     
   }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => this.error = error);
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


    var array:any[] = [{
      title:'ha',
      title_full:'lolo'
    },{
      title:'fffa',
      title_full:'lofflo'
    }
    ];

    // Converts an array to an observable sequence
    let source :Observable<any[]>= Observable.from(array);

    
    /*source.subscribe(item=>{
      this.items.push(item)
      
    })*/
    this.items = this.af.database.list('/stream', {
      query: {
        limitToFirst:5
      }
    })/*.subscribe(items=>{
       this.items = items;
    })*/
    //.limitToFirst(10);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
