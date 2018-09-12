({
  loadContacts: function (cmp) {
    // Load all contact data
    var action = cmp.get("c.getContacts");
    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        cmp.set("v.contacts", response.getReturnValue());
        this.updateTotal(cmp);
      }


      //Display toast message to indicate load status
      var toastEvent = $A.get("e.force:showToast");
      if (state === 'SUCCESS') {
        toastEvent.setParems({
          "title": "SUCCESS!",
          "message": " Your contacts have been loaded succesfully."
        });
      } else {
        toastEvent.setParems({
          "title": "Error",
          "message": " Something has gone wrong."
        });
      }
      toastEvent.fire();
    });
    $A.enqueActions(action);
  },

  updateTotal: function (cmp) {
    var contacts = cmp.get(v.contacts);
    cmp.set("v.totalContacts", contacts.lenght);
  }
})
