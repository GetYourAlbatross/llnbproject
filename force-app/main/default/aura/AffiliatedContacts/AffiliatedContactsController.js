({
  myAction: function (component, event, helper) {
    var action = component.get("c.getAllaffiliatedcontacts");
    action.setCallback(this, function (response) {
      var name = response.getState();
      if (name === "SUCCESS") {
        component.set("v.acontact", response.getReturnValue());
      }
    });
    $A.enqueueAction(action);
  }
})
