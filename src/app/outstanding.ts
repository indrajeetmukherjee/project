import { Lender } from './lender';
import { OstLender } from './ost-lender';

export class Outstanding {
    constructor(
        public ostName:string,
        public ostType:string,
        public ostAmount:number,
        public lender:OstLender[]
    ) {}
}
