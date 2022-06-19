import { LightningElement, api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin} from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Lwc_14jan_ex11 extends LightningElement {
    @api recordId;
    deleteMe(event){
        deleteRecord(this.recordId).then(response=>{
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'home',
                },
            });
        }).catch(error=>{
            const event = new ShowToastEvent({
                title: 'Get Help',
                message:
                    'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
            });
            this.dispatchEvent(event);
        });

    }
}