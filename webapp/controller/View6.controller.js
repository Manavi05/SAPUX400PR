sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View6", {

        onInit: function () {
            // Initialize model
            var oModel = new JSONModel({
                number: ""
            });
            this.getView().setModel(oModel);
        },

        onLiveChange: function (oEvent) {
            // Get input value
            var sValue = (oEvent.getParameter("value") || "").trim();
            var oInput = this.byId("numberInput");

            // ✅ Correct regex for only digits
            var bValid = /^\d*$/.test(sValue);

            // Validation logic
            if (!sValue) {
                oInput.setValueState(ValueState.None);
                oInput.setValueStateText("");
            } 
            else if (bValid) {
                oInput.setValueState(ValueState.Information);
                oInput.setValueStateText("Valid number");
            } 
            else {
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Only numbers allowed");
            }
        }

    });
});