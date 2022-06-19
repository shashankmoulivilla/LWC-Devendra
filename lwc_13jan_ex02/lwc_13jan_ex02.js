import { LightningElement } from 'lwc';

export default class Lwc_13jan_ex02 extends LightningElement {
    name='Devendra Villa';
    renameMe(event){
        this.name='Shashank Villa';
    }
    takeInput(event){
        this.name=event.target.value;
    }
}