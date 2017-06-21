import { Injectable } from '@angular/core';
import {Champion} from "../../model/champion";
import {CHAMPIONS} from "../../mock/champions/mock-champions";

@Injectable()
export class ChampionService{

  constructor() { }

  getChampions(): Promise<Champion[]> {
    return Promise.resolve(CHAMPIONS);
  }

  getChampion(id: number): Promise<Champion> {
    return this.getChampions().then(champions => champions.find(champion => champion.id === id));
  }
}
