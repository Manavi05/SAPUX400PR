sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
    
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View3", {

        onInit: function () {
            var oModel = new JSONModel({
                inputText: "",
                length:0
            });
            this.getView().setModel(oModel);

            this._maxLength = 10;
        },

        onLiveChange: function (oEvent){
            var sValue = oEvent.getParameter("value");
            var oInput = this.byId("inputField");

            // update length in model
            this.getView().getModel().setProperty("/length", sValue.length);

            //validation
            if(sValue.length > this._maxLength) {
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Max " + this._maxLength + " characters allowed");
            } else {
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid input");
            }
        }
    });
});