import {  NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentDAteComponent } from './components/nav-menu/current-date/current-date.component';
import { FlightDetailsComponent } from './components/nav-menu/flight-details/flight-details.component';
import { SamolotDuzyComponent } from './components/nav-menu/flight-details/samolot-duzy/samolot-duzy.component';
import { SamolotMalyComponent } from './components/nav-menu/flight-details/samolot-maly/samolot-maly.component';
import { SamolotSredniComponent } from './components/nav-menu/flight-details/samolot-sredni/samolot-sredni.component';
import { LogComponent } from './components/nav-menu/log/log.component';
import { SearchBarComponent } from './components/nav-menu/search-bar/search-bar.component';



const routes: Routes = [

{ path: '', redirectTo: 'search-bar', pathMatch: 'full' },
{ path: 'search-bar', component: SearchBarComponent },
{ path: 'flight-details', component: FlightDetailsComponent, children:[
  {path:'samolot-maly', component: SamolotMalyComponent,},
  {path:'samolot-sredni', component: SamolotSredniComponent,},
  {path:'samolot-duzy', component: SamolotDuzyComponent},
  ]
},
{ path: 'log', component: LogComponent,  },
{path: 'current-date', component: CurrentDAteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
