import { AmtSummary } from './amt-summary';

export class LenderSummary {
    constructor(
        public lenderName:string,
        public totalchgAmt:number,
        public amtSummary:AmtSummary[]
    ) {}
}
