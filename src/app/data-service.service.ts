import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  getDeal() {
    return {dealName:'DEAL',facility:[{facilityName:'FAC_NAME1',facilityType:'FAC_TYPE1',lender:[{lenderName:'BMO',commitAmt:1555,proRata:12},{lenderName:'SCOTIA',commitAmt:1555,proRata:12}]},{facilityName:'FAC_NAME2',facilityType:'FAC_TYPE2',lender:[{lenderName:'BMO',commitAmt:1555,proRata:12},{lenderName:'SCOTIA',commitAmt:1555,proRata:12}]}]};
  }
}
