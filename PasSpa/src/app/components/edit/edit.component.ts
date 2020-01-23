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

  check() {
    if (this.facilityType == this.BASKETBALL) {
      if (this.basketballFacility.access == null) {
        alert("Access has to be set!");
        return false;
      } else if (this.basketballFacility.field.surfaceArea == null ||
        this.basketballFacility.field.maxAmountOfPeople == null ||
        this.basketballFacility.field.typeOfGround == null ||
        this.basketballFacility.pricePerHours == null ||
        this.basketballFacility.name == null ||
        this.basketballFacility.numberOfBasket == null ||
        this.basketballFacility.minHeightOfBasket == null ||
        this.basketballFacility.maxHeightOfBasket == null) {
        alert("All fields have to be set!");
        return false;
      }
    } else {
      if (this.footballFacility.access == null) {
        alert("Access has to be set!");
        return false;
      } else if (this.footballFacility.fullSize == null) {
        alert("Full size has to be set!");
        return false;
      } else if (this.footballFacility.field.surfaceArea == null ||
        this.footballFacility.field.maxAmountOfPeople == null ||
        this.footballFacility.field.typeOfGround == null ||
        this.footballFacility.pricePerHours == null ||
        this.footballFacility.name == null ||
        this.footballFacility.widthOfGoal == null ||
        this.footballFacility.heightOfGoal == null) {
        alert("All fields have to be set!");
        return false;
      }
    }
    return true;
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
