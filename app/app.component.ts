import {Component, style} from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<div class="container">
      <div class="col-lg-10 col-offset-1 centered">
      <ul class="nav nav-pills" role="tablist">
        <li role="presentation"><a routerLink="">HOME</a></li>
        <li role="presentation"><a routerLink="newsfeed">NEWS FEED</a></li>
        <li role="presentation"><a routerLink="activepage/:id">ACTIVE PAGE</a></li>
        <li role="presentation">  <a routerLink="filterpage">FILTER</a></li>
      </ul>
     <router-outlet></router-outlet>
     </div>
     </div>
   `,
  styleUrls: ['../styles.css']
})
export class AppComponent {

  name = 'Angular';


}
