sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View5", {

        onInit: function () {
            // Initialize model
            var oModel = new JSONModel({
                email: ""
            });
            this.getView().setModel(oModel);
        },

        onLiveChange: function (oEvent) {
            // Get input value
            var sValue = (oEvent.getParameter("value") || "").trim();
            var oInput = this.byId("emailInput");

            // Email validation regex
            var bValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sValue);

            // Validation logic
            if (!sValue) {
                oInput.setValueState(ValueState.None);
                oInput.setValueStateText("");
            } 
            else if (bValid) {
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid Email");
            } 
            else {
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Enter Email like abc@xyz.com");
            }
        }

    });
});