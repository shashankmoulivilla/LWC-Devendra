import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex14comp extends LightningElement {
    vol=0;
    control = 'Please click to  activate this ';
    volumeIncrease(event){
        this.control=event.detail;
        if(this.vol<100)
        this.vol=this.vol +1;

    }
    volumeDecrease(event){
        this.control=event.detail;
        if(this.vol > 0)
        this.vol=this.vol-1;

    }
}