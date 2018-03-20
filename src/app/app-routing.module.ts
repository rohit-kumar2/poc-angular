import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatesComponent} from './states/states.component';
import {AddStatesComponent} from './states/add-states/add-states.component';
import {DistrictsComponent} from './districts/districts.component';
import {AddDistrictsComponent} from './districts/add-districts/add-districts.component';
import {SchoolsComponent} from './schools/schools.component';
import {AddSchoolsComponent} from './schools/add-schools/add-schools.component';

const routes: Routes = [
  { path: '', redirectTo: '/state', pathMatch: 'full' },
  { path: 'state', component: StatesComponent },
  { path: 'state/add', component: AddStatesComponent },
  { path: 'state/:stateId/district', component: DistrictsComponent },
  { path: 'state/:stateId/district/add', component: AddDistrictsComponent },
  { path: 'state/:stateId/district/:districtId/school', component: SchoolsComponent },
  { path: 'state/:stateId/district/:districtId/school/add', component: AddSchoolsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
