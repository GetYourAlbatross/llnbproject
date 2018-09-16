public with sharing class LeadController {
	@AuraEnabled
    public static List<Lead> getLeads() {
        List<Lead> leads = 
                [SELECT Id, Name, Email, LeadSource FROM Lead];

        //Add isAccessible() check
        return leads;
    }
}