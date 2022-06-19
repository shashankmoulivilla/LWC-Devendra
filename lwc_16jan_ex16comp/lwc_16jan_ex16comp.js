import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex16comp extends LightningElement {
    constructor(){
        super();
        this.template.addEventListener('programevent', this.handleme);

    }
    handleme(event){
        alert(event.detail);
    }

}