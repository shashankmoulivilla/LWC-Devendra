import { LightningElement ,track} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';


export default class Lwc_14jan_ex10 extends LightningElement {
    @track name 
    @track phone;
    @track fax;
    @track industry;
    @track active;
    name=NAME;
    callName(event){
    this.name=event.target.value;
    }
    callPhone(event){
        this.phone=event.target.value;
    }
    callFax(event){
        this.fax=event.target.value;
    }
    callIn(event){
        this.industry=event.target.value;
    }
    callactive(event){
        this.active=event.target.value;
    }
    saveMe(event){
     //step 1: create fields
     const fields = {'Name':this.name,'Fax':this.fax,'Phone':this.phone,'Industry':this.industry};
     //step2 : create api record with fields
     const recordData = {apiName:'Account',fields}
     //step 3: call imperation
     createRecord(recordData).then().catch();
    }
}