import { Lender } from './lender';

export class Facility {
    constructor(
        public facilityName:string,
        public facilityType:string,
        public lender:Lender[]
    ) {}
}
