import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RAT_FIELD from '@salesforce/schema/Account.Rating';
import BILLCITY_FIELD from '@salesforce/schema/Account.BillingCity';


export default class Lwc_14jan_09 extends LightningElement {
   objectName = ACCOUNT_OBJECT;
   myFields=[NAME_FIELD,PHONE_FIELD,FAX_FIELD,INDUSTRY_FIELD,BILLCITY_FIELD,RAT_FIELD];
   @api recordId;
}