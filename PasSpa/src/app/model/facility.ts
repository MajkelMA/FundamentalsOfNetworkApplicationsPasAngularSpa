import { Field } from './field';

export class Facility {
    
    id: string;
    pricePerHours: number;
    access: boolean;
    field: Field;
    name: string;
    type: string;

    constructor(
        id: string,
        pricePerHours: number,
        access: boolean,
        field: Field,
        name: string,
        type: string
    ) {
        this.id = id;
        this.pricePerHours = pricePerHours;
        this.access = access;
        this.field = field;
        this.name = name;
        this.type = type;
    }
}