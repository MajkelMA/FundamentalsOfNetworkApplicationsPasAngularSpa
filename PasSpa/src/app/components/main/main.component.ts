import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/model/facility';
import { MainService } from 'src/app/services/main.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  facilities: Facility[];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getFacilities();
  }

  getFacilities(): void {
    this.mainService.getAllFacilities().subscribe(
      res => {
        this.facilities = <Facility[]>JSON.parse(JSON.stringify(res));;
      },
      (error: HttpErrorResponse) => {
        console.log('Could not get all facilites!')
      }
    );
  }

  editFacility(id: string){
    //TODO
  }

  deleteFacility(id: string){
    //TODO
  }
}