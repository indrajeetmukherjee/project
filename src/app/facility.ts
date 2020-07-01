import { Lender } from './lender';
import { Outstanding } from './outstanding';

export class Facility {
    constructor(
        public facilityName:string,
        public facilityType:string,
        public lender:Lender[],
        public outstanding:Outstanding[]
    ) {}
}
