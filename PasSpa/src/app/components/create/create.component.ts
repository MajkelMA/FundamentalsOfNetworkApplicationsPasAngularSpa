import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { BasketballFacility } from 'src/app/model/backetball-facility';
import { Field } from 'src/app/model/field';
import { Router } from '@angular/router';
import { FootballFacility } from 'src/app/model/football-facility';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public readonly BASKETBALL = 0; FOOTBALL = 1;

  facilityType: number;
  booleans: boolean[] = [true, false]

  //Field
  surfaceArea: number;
  maxAmountOfPeople: number;
  typeOfGround: string;

  //Facility
  pricePerHours: number;
  access: boolean;
  name: string;
  type: string;

  //Football facility
  fullSize: boolean;
  widthOfGoal: number;
  heightOfGoal: number;

  //Basketball facility
  numberOfBasket: number;
  minHeightOfBasket: number;
  maxHeightOfBasket: number;

  constructor(
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit() {
    this.facilityType = this.BASKETBALL;
    this.fullSize = false;
    this.access = false;
  }

  setFacilityType(type: number) {
    this.facilityType = type;
    this.reset();
  }

  createBasketballFacility() {
    if (this.check()) {
      this.mainService.createBasketballFacility(
        new BasketballFacility('', this.pricePerHours, this.access, new Field(this.surfaceArea, this.maxAmountOfPeople, this.typeOfGround), this.name, "BasketballFacility", this.numberOfBasket, this.minHeightOfBasket, this.maxHeightOfBasket)).subscribe(
          (complete) => {
            console.log("Facility succesfully added!");
            alert("Facility succesfully added!");
            this.router.navigate(['/main']);
          },
          (error) => {
            console.log("Facility adding failed!")
          }
        )
    } else {
      console.log("Facility adding failed!")
    }
  }

  createFootballFacility() {
    if (this.check()) {
      this.mainService.createFootballFacility(
        new FootballFacility('', this.pricePerHours, this.access, new Field(this.surfaceArea, this.maxAmountOfPeople, this.typeOfGround), this.name, "FootballFacility", this.fullSize, this.widthOfGoal, this.heightOfGoal)).subscribe(
          (complete) => {
            console.log("Facility succesfully added!");
            alert("Facility succesfully added!");
            this.router.navigate(['/main']);
          },
          (error) => {
            console.log("Facility adding failed!")
          }
        );
    } else {
      console.log("Facility adding failed!")
    }
  }

  check() {
    if (this.access == null) {
      alert("Access has to be set!");
      return false;
    }

    if (this.surfaceArea == null ||
      this.maxAmountOfPeople == null ||
      this.typeOfGround == null ||
      this.pricePerHours == null ||
      this.name == null) {
      alert("All fields have to be set!");
      return false;
    }

    if (this.facilityType == this.BASKETBALL) {
      if (this.numberOfBasket == null ||
        this.minHeightOfBasket == null ||
        this.maxHeightOfBasket == null) {
        alert("All fields have to be set!");
        return false;
      }
    } else if (this.facilityType == this.FOOTBALL) {
      if (this.widthOfGoal == null ||
        this.heightOfGoal == null) {
        alert("All fields have to be set!");
        return false;
      } else if (this.fullSize == null) {
        alert("Full size has to be set!")
        return false;
      }
    }
    return true;
  }

  reset() {
    this.access = null;
    this.fullSize = null;
  }

}
