import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import PATIENT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME from '@salesforce/schema/Contact.Name';
import LASTNAME from '@salesforce/schema/Contact.LastName';
import MIDDLENAME from '@salesforce/schema/Contact.Middle_Name__c';
import GENDER from '@salesforce/schema/Contact.Gender__c';
import BIRTHDATE from '@salesforce/schema/Contact.Birthdate';
import EMAIL from '@salesforce/schema/Contact.Email';
import HOMEPHONE from '@salesforce/schema/Contact.HomePhone';
import MARITAL from '@salesforce/schema/Contact.Marital_Status__c';

export default class Lwc_patient_form extends LightningElement {
    @track patId;
    
     mname=MIDDLENAME;
     dob=BIRTHDATE;
     status=MARITAL;
     mail= EMAIL;
    phone= HOMEPHONE;
     gender= GENDER;
     
    name=FIRSTNAME;
    displayTherapy(event){
        this.dispatchEvent(new CustomEvent('therapy',{detail:'therapy'}));
         
    }
    displayNursing(event){
        this.dispatchEvent(new CustomEvent('nursing',{detail:'therapy'}));

    }
    handleName(event){  
         this.name=event.detail.value;
    }
    handleMName(event){  
        this.mname=event.detail.value;
   }
   handleDOB(event){  
    this.dob=event.detail.value;
        }
        handleStatus(event){  
            this.status=event.detail.value;
            
        }
        handleGender(event){  
            this.gender=event.detail.value;
        }
        handleEmail(event){  
            this.mail=event.detail.value;
        }

        handlePhone(event){  
            this.phone=event.detail.value;
        }
        onSubmitHandler(event){
            const fields = event.detail.fields;
                this.template.querySelector("lightning-record-edit-form").submit(fields);
            alert('gggg');
        }
    submitPatient(event){
        const fields = {};
        fields[FIRSTNAME.fieldApiName] = this.name;
        fields[HOMEPHONE.fieldApiName]=this.phone;
        fields[MIDDLENAME.fieldApiName] = this.mname;
        fields[GENDER.fieldApiName] = this.gender;
        fields[BIRTHDATE.fieldApiName] = this.dob;
        fields[EMAIL.fieldApiName] = this.mail;
        fields[MARITAL.fieldApiName] = this.status;
        
        const recordInput = { apiName: PATIENT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(contact => {
                
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });}
           /* const fields = {'Name':this.name,'Middle_Name__c':this.mname,'HomePhone':this.phone,'Email':this.mail,
                            //'Birthdate':this.dob,'Gender__c':this.gender,'Marital_Status__c':this.status};
     //step2 : create api record with fields
     const recordData = {apiName:'Contact',fields}
     //step 3: call imperation
     createRecord(recordData).then().catch();
     alert('heyy');
        
    }*/
    handleSubmit(event){
        event.preventDefault(); // stop the form from submitting
       const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields); 
        alert('dddd');
}
}

//this.dispatchEvent(new CustomEvent('createpat',{detail:'therapy'}));