public inherited sharing class lwc_15jan_ex13 {
    @AuraEnabled(cacheable=true)
    
    public static List<Contact>  findContacts( String searchtext) {

        String key ='%'+ searchtext +'%';
        return [select Id, Name,Phone,Email from Contact where firstname like :key];

    }
}

return [select First_Name__c,Middle_Name__c,Last_Name__c,Date_of_Birth__c,Contact_Phone__c,Email__c,Gender__c,Marital_Status__c,Medical_Record__c,Message__c,Preferred_day_of_the_week__c,Service__c,Specialty__c,Supportive_Care__c from Patient__c where Medical_Record__c like :key];