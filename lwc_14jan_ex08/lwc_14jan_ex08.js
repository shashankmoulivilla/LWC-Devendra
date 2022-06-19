import { LightningElement, api } from 'lwc';

export default class Lwc_14jan_ex08 extends LightningElement {
    @api recordId;
    resetMe(event){
        const inputFields= this.template.querySelectorAll('lightning-input-field');
        inputFields.forEach(field=>{field.reset();});
    }

}