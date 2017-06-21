import { Component, OnInit } from '@angular/core';
import {ChampionService} from "../services/champion-service/champion.service";
import {Champion} from "../model/champion";
import {Router} from "@angular/router";

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Champion [];
  selectedChampion: Champion;

  constructor(
    private championService: ChampionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getChampions();
  }

  onSelect(champion: Champion): void {
    this.selectedChampion = champion;
    console.log(this.selectedChampion);
  }

  gotoDetails(): void {
    this.router.navigate(['/detail', this.selectedChampion.id]);
  }

  private getChampions(): void {
    this.championService.getChampions().then(champions => {
      this.champions = champions;
    });
  }

}
