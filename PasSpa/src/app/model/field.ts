export class Field {

    surfaceArea: number;
    maxAmountOfPeople: number;
    typeOfGround: string;

    constructor(
        surfaceArea: number,
        maxAmountOfPeople: number,
        typeOfGround: string
    ) {
        this.surfaceArea = surfaceArea;
        this.maxAmountOfPeople = maxAmountOfPeople;
        this.typeOfGround = typeOfGround;
    }
}