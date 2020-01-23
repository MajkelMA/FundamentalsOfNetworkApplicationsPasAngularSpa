import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/model/facility';
import { MainService } from 'src/app/services/main.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FootballFacility } from 'src/app/model/football-facility';
import { BasketballFacility } from 'src/app/model/backetball-facility';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  facilities: Facility[];
  filter: string;

  constructor(
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFacilities();
  }

  getFacilities(): void {
    this.mainService.getAllFacilities().subscribe(
      res => {
        this.facilities = <Facility[]>JSON.parse(JSON.stringify(res));
      },
      (error: HttpErrorResponse) => {
        console.log('Could not get all facilites!')
      }
    );
  }

  filterFacilities() {
    if (this.filter != '') {
      this.mainService.getFilteredFacilities(this.filter).subscribe(
        res => {
          this.facilities = <Facility[]>JSON.parse(JSON.stringify(res));
        },
        (error) => {
          console.log('Could not get filtered facilites!')
        }
      );
    }
    this.getFacilities();
  }

  editFacility(facility: Facility) {
    this.router.navigate(['/edit/' + facility.id + '/' + facility.type]);
  }

  editFootballFacility(facility: FootballFacility) {
    this.mainService.updateFootballFacility(facility).subscribe(
      (complete) => {
        console.log("Updated successfully!");
        this.router.navigate(['/main']);
      },
      (error) => {
        console.log("Update failed!")
      }
    );
  }

  editBasketballFacility(facility: BasketballFacility) {
    this.mainService.updateBasketballFacility(facility).subscribe(
      (complete) => {
        console.log("Updated successfully!");
        this.router.navigate(['/main']);
      },
      (error) => {
        console.log("Update failed!")
      }
    );
  }

  deleteFacility(id: string) {
    this.mainService.deleteFacility(id).subscribe(
      (complete) => {
        console.log('Successfully deleted!');
        this.getFacilities();
      },
      (error) => {
        console.log('Delete failed!');
      }
    )
  }
}