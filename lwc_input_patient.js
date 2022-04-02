import { LightningElement, wire, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import findPatient from '@salesforce/apex/find_patient.findPatient';
export default class Lwc_patient_record extends LightningElement {
    showFields = false;
    showNFields = false;
    @track searchkey;
    @wire (findPatient, {searchtext:'$searchkey'}) patient;
     searchMe(event){
     this.searchkey =event.target.value;
     }
    toggleFields() {
        this.showFields = !this.showFields;

    }
    toggleNFields() {
       this.showNFields = !this.showNFields;

    }
    
    handleSuccess(event) { 
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account created',
                variant: 'success',
            }),
        );
        
    }
    handleError(event){
        console.log(event.detail);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: event.detail.error,
                variant: 'error',
            }),
        );
    }
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
    
   
}