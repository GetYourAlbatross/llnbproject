({
  doInit: function (component, event, helper) {
    // Retrieve contacts during component initialization
    helper.loadLeads(component);
  },

  handleSelect: function (component, event, helper) {
    var leads = component.get("v.leads");
    var leadList = component.get("v.leadList");

    //Get the selected option: "Referral", "Social Media", or "All"
    var selected = event.getSource().get("v.value");

    var filter = [];
    var k = 0;
    for (var i = 0; i < leadList.length; i++) {
      var c = leadList[i];
      if (selected != "All") {
        if (c.LeadSource == selected) {
          filter[k] = c;
          k++;
        }
      } else {
        filter = leadList;
      }
    }
    //Set the filtered list of contacts based on the selected option
    component.set("v.leads", filter);
    helper.updateTotal(component);
  }
})