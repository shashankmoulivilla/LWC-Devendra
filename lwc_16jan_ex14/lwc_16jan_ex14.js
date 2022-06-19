import { LightningElement } from 'lwc';

export default class Lwc_16jan_ex14 extends LightningElement {
    inchandler(event){
        /*
        //step 1 : crate  a custm event
        const inc = new CustomEvent('increase');
        //step2 : dispatch event
        this.dispatchEvent(inc);
        */
       //step 1 : crate  a custm event with data
       const inc = new CustomEvent('increase', {detail:'VolIncControl'});
       //step2 : dispatch event
       this.dispatchEvent(inc); 


    }
    dechandler(event){
        /*
        // create and dispatch in a singl estep

        this.dispatchEvent(new CustomEvent('decrease'));
        */
       // create and dispatch in a single step with data

       this.dispatchEvent(new CustomEvent('decrease',{detail:'volDecControl'}));

    }
}