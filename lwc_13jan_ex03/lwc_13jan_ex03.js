import { LightningElement, track} from 'lwc';

export default class Lwc_13jan_ex03 extends LightningElement {
    @track num1;
    @track num2;
    @track num3;
    result;
    firstNum(event){
       this.num1 =event.target.value;
    }
    secondNum(event){
        this.num2=event.target.value;
    }
    thirdNum(event){
        this.num3=event.target.value;
    }
    calculateMe(event){
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        const c = parseInt(this.num3);
        if(a>b && a>c)
        alert('greatest number is '+ a);
        else if(b>a && b>c)
        alert('greatest number is '+ b);
        else
        alert('greatest number is '+ c);

 
    }
    clearMe(event){
        this.num1='';
        this.num2='';
        this.num3='';
        this.result='';

    }
}