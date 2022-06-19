import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex15comp extends LightningElement {
    employeename;
    employeephone;
    employeecity;
    handlesubmit(event){
        this.employeename=event.detail.ename;
        this.employeephone=event.detail.ephone;
        this.employeecity=event.detail.ecity;



    }
}