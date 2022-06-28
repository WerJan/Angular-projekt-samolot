import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SearchBarComponent } from './components/nav-menu/search-bar/search-bar.component';
import { LogComponent } from './components/nav-menu/log/log.component';
import { FlightDetailsComponent } from './components/nav-menu/flight-details/flight-details.component';
import { CurrentDAteComponent } from './components/nav-menu/current-date/current-date.component';
import { SamolotMalyComponent } from './components/nav-menu/flight-details/samolot-maly/samolot-maly.component';
import { SamolotSredniComponent } from './components/nav-menu/flight-details/samolot-sredni/samolot-sredni.component';
import { SamolotDuzyComponent } from './components/nav-menu/flight-details/samolot-duzy/samolot-duzy.component';

import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    SearchBarComponent,
    LogComponent,
    FlightDetailsComponent,
    CurrentDAteComponent,
    SamolotMalyComponent,
    SamolotSredniComponent,
    SamolotDuzyComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    CheckboxModule, 
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
