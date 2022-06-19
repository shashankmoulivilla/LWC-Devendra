import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex17parent extends LightningElement {
    emName;
    emAge;
    emPhone;
    constructor(event){
        super();
        this.template.addEventListener('empevt',this.readme);
    }
    readme(event){
        this.emName= event.detail.eName;
        this.emAge= event.detail.eAge;

        this.emPhone= event.detail.ePhone;


    }
}