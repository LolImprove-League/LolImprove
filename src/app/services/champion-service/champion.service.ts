import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {environment} from "../../../environments/environment";
import {Champion} from "../../model/champion";

@Injectable()
export class ChampionService{

  private apiUrl = `${environment.apiUrl}`;
  private headers : Headers;

  constructor(private http: Http) {

  }

  getChampions(): Promise<Champion[]> {
    return this.http.get(`${this.apiUrl}/${environment.allChampionsEndPoint}`).toPromise().then(response => {
      let champs = response.json() as Champion[];
      console.log(champs);
      return response.json() as Champion [];
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
