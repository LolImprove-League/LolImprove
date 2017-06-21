import {Component, OnInit} from '@angular/core';
import {ChampionSearchService} from "../services/champion-search-service/champion-search.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Champion} from "../model/champion";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";

@Component({
  selector: 'champion-search',
  templateUrl: './champion-search.component.html',
  styleUrls: ['./champion-search.component.css'],
  providers: [ChampionSearchService]
})
export class ChampionSearchComponent implements OnInit {

  champions: Observable<Champion[]>;
  private searchTerms = new Subject<string>();

  constructor(private championSearchService: ChampionSearchService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.champions = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.championSearchService.search(term) : Observable.of<Champion[]>([]));
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(champion: Champion): void {
    let link = ['/detail', champion.id];
    this.router.navigate(link);
  }

}
