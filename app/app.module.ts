import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>'
};

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { NewsfeedComponent } from './components/newsfeed.component';
import { ActivepageComponent } from './components/activepage.component';
import { FilterpageComponent } from './components/filter.component';

// service
import { DataService } from './service/data.service';
// routing
import { DataAppRoutes } from './routing/main.routing'


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule.forRoot(DataAppRoutes), AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent, NewsfeedComponent, ActivepageComponent, FilterpageComponent, HomeComponent ],
  providers: [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
