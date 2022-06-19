import { LightningElement, track } from 'lwc';

export default class Lwc_13jan_ex04 extends LightningElement {
    @track Amount;
    @track rate;
    @track Term;
    amount(event){
        this.Amount=event.target.value;

    }
    rateOfInterest(event){
        this.rate=event.target.value;

    }
    term(event){
        this.Term=event.target.value;

    }
    calculate(event){
        const p= parseInt(this.Amount);
        const t= parseInt(this.rate);
        const r= parseInt(this.Term);

        alert('The interest Accumulated is :'+ ((t*r)/100) + 'and The total amount at maturity is :'+ ((p*t*r)/100));
         
    }
    clear(event){
        this.Amount='';
        this.rate='';
        this.Term='';
    }

}