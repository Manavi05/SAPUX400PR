sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",

], function (Controller,JSONModel,MessageToast) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View11", {

        onInit: function (){
            var oModel = new JSONModel({
                selectedKey: "2",
                dropdownItems: [
                    { key: "1", text: "Option 1"},
                    { key: "2", text: "Option 2"},
                    { key: "3", text: "Option 3"},
                ]
            });
            this.getView().setModel(oModel);
        },

        onselectionchange: function (oEvent) {
            // Get input value
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            var sSelectedText = oEvent.getparameter("selectedItem").getText();

           MessageToast.show("Selected: " + sSelectedText + " (" + sSelectedKey + ")");

           
        }

    });
});