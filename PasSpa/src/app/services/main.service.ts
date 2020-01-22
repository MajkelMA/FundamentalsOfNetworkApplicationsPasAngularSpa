import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Facility } from '../model/facility';

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

}
