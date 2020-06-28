import { Facility } from './facility';

export class Deal {
    constructor(
        public dealName:string,
        public facility:Facility[]
    ) {}
}
