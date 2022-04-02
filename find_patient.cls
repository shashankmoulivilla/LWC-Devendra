public inherited sharing class find_patient {
    @AuraEnabled(cacheable=true)
    
    public static List<Patient__c>  findPatient( String searchtext) {

        String key ='%'+ searchtext +'%';
        return [select First_Name__c,Middle_Name__c,
                Last_Name__c,Date_of_Birth__c,Contact_Phone__c,
                Email__c,Gender__c,Marital_Status__c,Medical_Record__c,
                Message__c,Preferred_day_of_the_week__c,Preferred_Time_Of_Day__c,
                Service__c,Specialty__c,Supportive_Care__c,Preferred_day_of_the_week_Nursing__c,
                Preferred_Time_Of_Day_Nursing__c,Message_Nursing__c 
                from Patient__c where Medical_Record__c like :key];

    }
}
