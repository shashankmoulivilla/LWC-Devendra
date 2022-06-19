
/*FOR Searching the patient using medical Record*/ 

public inherited sharing class findPatientController {
    @AuraEnabled(cacheable=true)
    public static List<ContactServiceListWrapper> findPatientServices( String searchtext) {
        String key =searchtext ;
        List<ContactServiceListWrapper> conWrapperList = new List<ContactServiceListWrapper>();
        
        List<Contact> conList = [SELECT Name,Middle_Name__c,
                                Birthdate,HomePhone,Email,Gender__c,Marital_Status__c,Medical_Record__c,
                                (SELECT Message__c,Preferred_day_of_the_week__c,Preferred_Time_Of_Day__c,
                                Service__c,Specialty__c,Supportive_Care__c,Preferred_day_of_the_week_Nursing__c,
                                Preferred_Time_Of_Day_Nursing__c,Message_Nursing__c
                                from Services__r) FROM Contact where Medical_Record__c like :key];
                if(!conList.isEmpty()){
                    for(Contact con : conList){
                        ContactServiceListWrapper conWrapper = new ContactServiceListWrapper();
                        conWrapper.conRecord = con;
                        conWrapper.contactList = con.Services__r;
                        conWrapperList.add(conWrapper);
                    }
                }
                return conWrapperList;
            }

            public class ContactServiceListWrapper{
                @AuraEnabled
                public Contact conRecord{get;set;}
                @AuraEnabled
                public List<Service__c> contactList{get;set;}
            }
    }