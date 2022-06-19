import { LightningElement, api,wire, track} from 'lwc';
import { NavigationMixin } from "lightning/navigation";
import findPatientServices from '@salesforce/apex/findPatientController.findPatientServices';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import SERVICE_OBJECT from '@salesforce/schema/Service__c';
export default class Lwc_patient_record extends NavigationMixin(LightningElement)
 { 
    showFields = false;
    showNFields = false;
    contactId;
    @track searchkey;
    @api objectApiName;
    @track patientwithServices;
    @track error;
    @track data;
    @wire(findPatientServices,{searchtext:'$searchkey'})wiredpatientwithServices
    wiredpatientwithServices({ error, data }) {
        if (data) {
            this.patientwithServices = data;
        } else if (error) {
            this.error = error;
        }
        
    }
    @wire(getObjectInfo, { objectApiName: SERVICE_OBJECT })
    objectInfo;

    get recordTypeId() {
        
        const rtis = this.objectInfo.data.recordTypeInfos;
        return Object.keys(rtis).find(rti => rtis[rti].name === 'Nursing Services');
        
    }
    get recordTypeId1() {
      
      const rtis = this.objectInfo.data.recordTypeInfos;
      return Object.keys(rtis).find(rti => rtis[rti].name === 'Therapy Services');
      
  }
    // for showing the checkbox fields
    toggleFields() {
        this.showFields = !this.showFields;

    }
    toggleNFields() {
       this.showNFields = !this.showNFields;

    }
    // submit the fields for creation
    handleSavee(event) {
    let contactTab = this.template.querySelector('lightning-record-edit-form[data-id="contactTab"]');
    contactTab.submit();
    }
    
  handleSuccess(event) {
    this.contactId = event.detail.id;

    this.template.querySelectorAll('lightning-input-field[data-id="contactServiceId"]').forEach((field) => {
      field.value = this.contactId;
    });
    
    if(this.showFields!=true && this.showNFields!= true){
      this[NavigationMixin.Navigate]({
        type: "standard__recordPage",
        attributes: {
          recordId: this.contactId,
          actionName: "view"
        }
      });}
	this.template.querySelectorAll('lightning-record-edit-form[data-id="serviceForm"]').forEach((form) => {
        form.submit();
      });
      
  }
  handleTServiceSaveSuccess(event){
    this[NavigationMixin.Navigate]({
        type: "standard__recordPage",
        attributes: {
          recordId: this.contactId,
          actionName: "view"
        }
      });
    }
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field');
        
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
     //for search medical record
     searchMe(event){
      this.searchkey =event.target.value;
     }
    
}