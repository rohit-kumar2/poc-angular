import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { StateService } from './service/state.service';
import {HttpClientModule} from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule} from '@angular/forms';
import { DistrictsComponent } from './districts/districts.component';
import {DistrictService} from './service/district.service';
import { SchoolsComponent } from './schools/schools.component';
import {SchoolService} from './service/school.service';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './/app-routing.module';
import { AddStatesComponent } from './states/add-states/add-states.component';
import {AppHttp} from './shared/http.service';
import { AddDistrictsComponent } from './districts/add-districts/add-districts.component';
import { AddSchoolsComponent } from './schools/add-schools/add-schools.component';


@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    DistrictsComponent,
    SchoolsComponent,
    AddStatesComponent,
    AddDistrictsComponent,
    AddSchoolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [AppHttp, StateService, DistrictService, SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
