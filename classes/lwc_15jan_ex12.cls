public with sharing class lwc_15jan_ex12 {
    @AuraEnabled(cacheable=true)
    
    public static List<Contact> getConList(){
        return [select Id, FirstName, LastName, Phone, Email FROM Contact];
    }

}
