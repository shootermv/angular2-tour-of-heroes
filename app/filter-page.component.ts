import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'filtersPage.component.html',
  styleUrls: ['heroes.component.css']
})
export class FiltersPageComponent implements OnInit {
   ngOnInit(): void {
     // this.getHeroes();
   }
   constructor(
    private af: AngularFire,
    private router: Router,
    private heroService: HeroService) {

   } 
}