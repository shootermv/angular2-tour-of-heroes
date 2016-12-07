import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroService]
})
export class HeroSearchComponent implements OnInit {
  //heroes: Observable<Hero[]>;
  heroes:Hero[];// FirebaseListObservable<Hero[]>;;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroService,
    private router: Router) { }
    
  search(term: string): void {
    // Push a search term into the observable stream.
    this.heroSearchService.search(term).subscribe(data=>{
      console.log('DATA:',data, 'term',term,'------------' )
      this.heroes = data;
    });
  }

  ngOnInit(): void {

    /*
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });*/
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
