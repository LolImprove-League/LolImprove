import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Champion} from "../../model/champion";
import "rxjs/add/operator/map";

@Injectable()
export class ChampionSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Champion[]> {
    return this.http.get(`app/champions/?name=${term}`).map(response => response.json().data as Champion[]);
  }
}
