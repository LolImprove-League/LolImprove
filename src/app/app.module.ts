import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionsComponent } from './champions/champions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {ChampionService} from "./services/champion-service/champion.service";

@NgModule({
  declarations: [
    AppComponent,
    ChampionDetailComponent,
    ChampionsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent],
})
export class AppModule { }
