import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { BasketballFacility } from 'src/app/model/backetball-facility';
import { FootballFacility } from 'src/app/model/football-facility';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public readonly BASKETBALL = 0; FOOTBALL = 1;

  facilityId: string;
  facilityType: number;
  basketballFacility: BasketballFacility;
  footballFacility: FootballFacility;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      value => {
        this.facilityId = value.get('id');
        if (value.get('type') == 'BasketballFacility') {
          this.facilityType = this.BASKETBALL;
        } else {
          this.facilityType = this.FOOTBALL;
        }
      }
    );
    this.getFacility();
  }

  editFootballFacility() {
    this.mainService.updateFootballFacility(this.footballFacility).subscribe(
      (complete) => {
        console.log("Successfully updated!");
        this.router.navigate(['/main']);
      },
      (error) => {
        console.log("Update failed!");
        console.log(error);
      }
    )
  }

  editBasketballFacility() {
    this.mainService.updateBasketballFacility(this.basketballFacility).subscribe(
      (complete) => {
        console.log("Successfully updated!");
        this.router.navigate(['/main']);
      },
      (error) => {
        console.log("Update failed!");
        console.log(error);
      }
    )
  }

  setFacilityType(type: number) {
    this.facilityType = type;
  }

  getFacility() {
    this.mainService.getFacilitity(this.facilityId).subscribe(
      res => {
        console.log("Get facility successfully!")
        if (this.facilityType == this.BASKETBALL) {
          this.basketballFacility = JSON.parse(JSON.stringify(res));
        } else if (this.facilityType == this.FOOTBALL) {
          this.footballFacility = JSON.parse(JSON.stringify(res));
        }
      },
      (error) => {
        console.log("Could not get facility!")
      }
    );
  }
}
