import {Component, OnInit} from "@angular/core";
import {Champion} from "../model/champion";
import {ChampionService} from "../services/champion-service/champion.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  champions: Champion [];

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.championService.getChampions().then(champions => {
      this.champions = champions;
    })
  }

}
