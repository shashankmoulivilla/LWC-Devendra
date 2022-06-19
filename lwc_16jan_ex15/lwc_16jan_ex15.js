import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex15 extends LightningElement {
    name;
    phone;
    city;

    empName(event){
        this.name= event.target.value;

    }
    empPhone(event){
        this.phone= event.target.value;

    }
    empCity(event){
        this.city= event.target.value;

    }
    empEvent(event){
        this.dispatchEvent(new CustomEvent('submitdetails',{detail:{ename:this.name, ephone:this.phone, ecity:this.city}}));

    }
}