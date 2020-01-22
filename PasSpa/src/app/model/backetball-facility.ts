import { Facility } from './facility';
import { Field } from './field';

export class BasketballFacility extends Facility {

    numberOfBasket: number;
    minHeightOfBasket: number;
    maxHeightOfBasket: number;

    constructor(
        id: string,
        pricePerHours: number,
        access: boolean,
        field: Field,
        name: string,
        type: string,
        numberOfBasket: number,
        minHeightOfBasket: number,
        maxHeightOfBasket: number
    ) {
        super(id, pricePerHours, access, field, name, type);
        this.numberOfBasket = numberOfBasket;
        this.minHeightOfBasket = minHeightOfBasket;
        this.maxHeightOfBasket = maxHeightOfBasket;
    }
}