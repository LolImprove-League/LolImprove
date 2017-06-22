import {Component, OnInit} from "@angular/core";
import {ChampionService} from "../services/champion-service/champion.service";
import {Router} from "@angular/router";
import {Champion} from "../model/champion";

const MAXCARDS: number = 6;

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Champion [];
  championsCards: Champion[][] = [];
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

      this.champions = champions.sort((a: Champion, b: Champion) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      let nChamps = this.champions.length;
      let offset = 0;
      while (nChamps >= offset) {
        let temp: Champion[] = [];
        for (let i = 0; i < MAXCARDS; i++) {
          console.log('currindex:' + (offset + i));
          console.log(this.champions[offset + i]);
          if (offset + i < nChamps) temp.push(this.champions[offset + i]);
        }
        offset += MAXCARDS;
        this.championsCards.push(temp);
      }

    });
  }

}
