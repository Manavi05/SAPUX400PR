sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View9", {

        onInit: function () {
            // Initialize model
            var oModel = new JSONModel({
                value: ""
            });
            this.getView().setModel(oModel);
        },

        onValidate: function () {
 
            var oNameInput = this.byId("nameInput1");
            var oEmailInput = this.byId("emailInput1");

            var sName = (oNameInput.getValue() || "").trim();
            var sEmail = (oEmailInput.getValue() || "").trim();

            var bValid = true;
            var bEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail);

            if (!sName) {
                onameInput.setValueState(ValueState.Error);
                oNmaeInput.setValueStateText("Name is required");
            } 
             else {
                oNameInput.setValueState(ValueState.Success);
                oNmaeInput.setValueStateText("Valid Name");
            }
          if (!sEmail) {
                oEmailInput.setValueState(ValueState.Error);
                oNmaeInput.setValueStateText("Email is required");
                bvalid = false;
            } 
             else  if(!bEmailValid) {
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("Enter a valid Email");
            }
            else {
                oEmailInput.setValueState(ValueState.Success);
                oEmailInput.setValueStateText("Valid Email");
            }
            if (bValid){
                MessageToast.show("All Fields Are Valid");
            }
        }
        

    });
});