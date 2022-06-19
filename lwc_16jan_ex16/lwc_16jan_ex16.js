import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex16 extends LightningElement {

    fireMe(event){
        this.dispatchEvent(new CustomEvent('programevent',{detail:'this is a programtic event', bubbles:true, composed:true}));
    }

}