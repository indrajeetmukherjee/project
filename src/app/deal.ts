import { Facility } from './facility';
import { LenderSummary } from './lender-summary';

export class Deal {
    constructor(
        public dealName:string,
        public facility:Facility[],
        public lender:LenderSummary[]
    ) {}
}
