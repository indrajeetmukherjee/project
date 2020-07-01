export class OstLender {
    constructor(
        public lenderName:string,
        public commitAmt:number,
        public proRata:number,
        public newCommitAmt:number,
        public newProRata:number,
        public delta:number
    ) {}
}
