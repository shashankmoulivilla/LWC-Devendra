import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex16child extends LightningElement {
    
    employeeName;
    employeeAge;
    employeePhone;
    empName(event){
        this.employeeName= event.target.value;

    }
    empAge(event){
        this.employeeAge= event.target.value;
    }
    empPhone(event){
        this.employeePhone= event.target.value;
    }
    submitme(event){
        this.dispatchEvent(new CustomEvent('empevt',{detail:{eName:this.employeeName, eAge:this.employeeAge, ePhone:this.employeePhone,bubbles:true,composed:true}}))
    }
}