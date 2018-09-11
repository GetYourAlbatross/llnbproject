global with sharing class FetchAffiliated {
@auraEnabled
    public static List<Affiliated_Contact__c> getAllaffiliatedcontacts()
    {
     List<Affiliated_Contact__c> acontact=new LIST<Affiliated_Contact__c>();
        acontact=[select id,First_Name__c,Last_Name__c,Email__c from Affiliated_Contact__c];
        return acontact;
    }
    public Affiliated_Contact__c getSelectedaffiliatedcontacts(Id id)
    {
      Affiliated_Contact__c acontact=[select id,First_Name__c,Last_Name__c,Email__c from Affiliated_Contact__c where id=:id];
        return acontact;
    }

}
