import {Component, OnInit} from "@angular/core";
import {ChampionService} from "../services/champion-service/champion.service";
import {Router} from "@angular/router";
import {Champion} from "../model/champion";
import {environment} from "../../environments/environment";

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Champion [];
  selectedChampion: Champion;
  imageUrl: string = environment.imageUrl;

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

      this.champions = champions.sort((a: Champion, b: Champion) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      console.log(this.champions);
      console.log(this.imageUrl);
    });
  }

  imageUrlForChampion(champion: Champion): string {
    return environment.imageUrl + '/' + champion.image.group + '/' + champion.image.full;
  }

}
