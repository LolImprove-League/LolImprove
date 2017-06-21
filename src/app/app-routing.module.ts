import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ChampionsComponent} from "./champions/champions.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ChampionDetailComponent} from "./champion-detail/champion-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'champions', component: ChampionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ChampionDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
