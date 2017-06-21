import { Injectable } from '@angular/core';
import {Champion} from "../../model/champion";
import {Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {environment} from "../../../environments/environment";

@Injectable()
export class ChampionService{

  private apiUrl = `${environment.apiEndPointChampions}`;
  private headers : Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('X-Riot-Token', environment.apiKey);
    this.headers.append('Access-Control-Allow-Origin', environment.apiEndPointChampions)
  }

  getChampions(): Promise<Champion[]> {
    return this.http.get(this.apiUrl).toPromise().then(response => {
      console.log(response.json());
      return response.json().data as Champion []
    }).catch(this.handleError);
  }

  getChampion(id: number): Promise<Champion> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json().data as Champion).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
