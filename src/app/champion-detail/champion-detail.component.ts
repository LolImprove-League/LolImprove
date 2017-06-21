import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap'

import {Champion} from "../model/champion";
import {ChampionService} from "../services/champion-service/champion.service";

@Component({
  selector: 'champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit {

  @Input() champion: Champion;

  constructor(
    private championService: ChampionService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.championService.getChampion(+params['id'])).subscribe(champion => this.champion = champion);
  }

  goBack(): void {
    this.location.back();
  }

}
