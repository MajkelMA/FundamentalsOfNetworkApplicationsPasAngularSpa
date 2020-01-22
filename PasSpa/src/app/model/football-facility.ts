import { Facility } from './facility';
import { Field } from './field';

export class FootballFacility extends Facility {

    fullSize: boolean;
    widthOfGoal: number;
    heightOfGoal: number;

    constructor(
        id: string,
        pricePerHours: number,
        access: boolean,
        field: Field,
        name: string,
        type: string,
        fullSize: boolean,
        widthOfGoal: number,
        heightOfGoal: number
    ) {
        super(id, pricePerHours, access, field, name, type);
        this.fullSize = fullSize;
        this.widthOfGoal = widthOfGoal;
        this.heightOfGoal = heightOfGoal;
    }
}