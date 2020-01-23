import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Facility } from '../model/facility';
import { FootballFacility } from '../model/football-facility';
import { BasketballFacility } from '../model/backetball-facility';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllFacilities() {
    return this.httpClient.get<Facility[]>(
      'https://localhost:8181/pas2/api/facilities'
    );
  }

  getFacilitity(id: string) {
    return this.httpClient.get<Facility>(
      'https://localhost:8181/pas2/api/facilities/' + id
    );
  }

  getFilteredFacilities(name: string) {
    return this.httpClient.get<Facility[]>(
      'https://localhost:8181/pas2/api/facilities/filter/' + name
    );
  }

  createFootballFacility(facility: FootballFacility) {
    return this.httpClient.post<FootballFacility>(
      'https://localhost:8181/pas2/api/facilities/football',
      JSON.stringify(facility),
      httpOptions
    )
  }

  createBasketballFacility(facility: BasketballFacility) {
    return this.httpClient.post<BasketballFacility>(
      'https://localhost:8181/pas2/api/facilities/basketball',
      JSON.stringify(facility),
      httpOptions
    )
  }

  deleteFacility(id: string) {
    return this.httpClient.delete<string>(
      'https://localhost:8181/pas2/api/facilities/' + id.toString()
    );
  }

  updateFootballFacility(facility: FootballFacility) {
    return this.httpClient.put<FootballFacility>(
      'https://localhost:8181/pas2/api/facilities/football/update',
      JSON.stringify(facility),
      httpOptions
    );
  }

  updateBasketballFacility(facility: BasketballFacility) {
    return this.httpClient.put<BasketballFacility>(
      'https://localhost:8181/pas2/api/facilities/basketball/update',
      JSON.stringify(facility),
      httpOptions
    );
  }

}
