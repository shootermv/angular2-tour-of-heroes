import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyA-HlcV4jtbhB0sL2D74SK9RVH9oZIQgVU",
  authDomain: "js-fuseday-2016-stream.firebaseapp.com",
  databaseURL: "https://js-fuseday-2016-stream.firebaseio.com",
  storageBucket: "js-fuseday-2016-stream.appspot.com",
  messagingSenderId: "533084422648"
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
