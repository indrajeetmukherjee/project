import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  getDeal() {
    return {dealName:'DEAL',lender:[{lenderName:'BMO',totalchgAmt:-1,amtSummary:[]},{lenderName:'SCOTIA',totalchgAmt:-1,amtSummary:[]}],facility:[{facilityName:'FAC_NAME1',facilityType:'FAC_TYPE1',
    lender:[{lenderName:'BMO',commitAmt:1555,proRata:12},{lenderName:'SCOTIA',commitAmt:1555,proRata:12}],
    outstanding:[{ostName:'OST_NAME1',ostType:'OST_TYPE1',ostAmount:15555,ostCur:'INR',ostFund:'N',
    lender:[{lenderName:'BMO',commitAmt:1555,proRata:12,newCommitAmt:123,newProRata:13,delta:-1},{lenderName:'SCOTIA',commitAmt:1555,proRata:12,newCommitAmt:123,newProRata:13,delta:-1}]},
    {ostName:'OST_NAME2',ostType:'OST_TYPE2',ostAmount:15556,ostCur:'CAD',ostFund:'Y',
    lender:[{lenderName:'BMO',commitAmt:1556,proRata:12,newCommitAmt:123,newProRata:13,delta:-1},{lenderName:'SCOTIA',commitAmt:1556,proRata:12,newCommitAmt:123,newProRata:13,delta:-1}]}]
  },
    {facilityName:'FAC_NAME2',facilityType:'FAC_TYPE2',
    lender:[{lenderName:'BMO',commitAmt:1555,proRata:12},{lenderName:'SCOTIA',commitAmt:1555,proRata:12}],
    outstanding:[{ostName:'OST_NAME3',ostType:'OST_TYPE3',ostAmount:14444,ostCur:'INR',ostFund:'Y',
    lender:[{lenderName:'BMO',commitAmt:1555,proRata:12,newCommitAmt:123,newProRata:13,delta:-1},{lenderName:'SCOTIA',commitAmt:1555,proRata:12,newCommitAmt:123,newProRata:13,delta:-1}]}]
  },
  {facilityName:'FAC_NAME2',facilityType:'FAC_TYPE2',
  lender:[{lenderName:'BMO',commitAmt:1555,proRata:12},{lenderName:'SCOTIA',commitAmt:1555,proRata:12}],
  outstanding:[]
}]};
  }
}
