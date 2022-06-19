import { LightningElement, wire, track } from 'lwc';
import getConList from '@salesforce/apex/lwc_15jan_ex12.getConList';
import { updateRecord } from 'lightning/uiRecordApi';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id'; 

const column=[
    {label:"FFirst Name",fieldName:"FirstName",type:"text",editable:true},
    {label:"Last Name",fieldName:"LastName",type:"text",editable:true},
    {label:"Phone",fieldName:"Phone",type:"text"},
    {label:"Email",fieldName:"Email",type:"email"},

];
export default class Lwc_15jan_ex12 extends LightningElement {
    @track col=column;
    @wire(getConList) datavariable;
    @track draftValues=[];

handleSave(event){
    const fields={};
    fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
    fields[FIRST_NAME_FIELD.fieldApiName] = event.detail.draftValues[0].FirstName;
    fields[LAST_NAME_FIELD.fieldApiName] = event.detail.draftValues[0].LastName;
    const recordInput = {fields};
    updateRecord(recordInput).then(response=>{
        alert('record updated succesfully');
        this.draftValues=[];
        return refreshApex(this.datavariable);

    }).catch(error=>{
        alert('An error has occurred'+ error.body.message);

    });

}
   

}