import { HomeComponent } from '../components/home.component';
import { NewsfeedComponent } from '../components/newsfeed.component';
import { ActivepageComponent } from '../components/activepage.component';
import { FilterpageComponent } from '../components/filter.component';

export const DataAppRoutes = [
  { path: '', component: HomeComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'activepage/:id', component: ActivepageComponent },
  { path: 'filterpage', component: FilterpageComponent }
];
