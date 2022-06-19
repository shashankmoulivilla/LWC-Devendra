import { LightningElement, track, wire } from 'lwc';
import findContacts from '@salesforce/apex/lwc_15jan_ex13.findContacts';

export default class Lwc_15jan_ex13 extends LightningElement {
@track searchkey;
@wire (findContacts, {searchtext:'$searchkey'}) contact;
searchMe(event){
 this.searchkey =event.target.value;
}
}