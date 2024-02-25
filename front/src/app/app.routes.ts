import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatefulComponent } from './pages/stateful/stateful.component';
import { SimplePdsComponent } from './pages/simple-pds/simple-pds.component';
import { PdsCqsComponent } from './pages/pds-cqs/pds-cqs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stateful', component: StatefulComponent },
  { path: 'pds', component: SimplePdsComponent },
  { path: 'pds-cqs', component: PdsCqsComponent },
];
