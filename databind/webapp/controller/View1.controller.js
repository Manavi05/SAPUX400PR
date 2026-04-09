sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "com/databind/databind/model/formatter"
], function (Controller, JSONModel, Filter, FilterOperator, Sorter, formatter) {
    "use strict";

    return Controller.extend("com.databind.databind.controller.View1", {

        formatter: formatter,

        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("com/databind/databind/model/data.json"));
            this.getView().setModel(oModel);
        },

        // Filter by status
        onFilterPending: function () {
            var oList = this.byId("reqList");
            var oBinding = oList.getBinding("items");

            var oFilter = new Filter("Status", FilterOperator.EQ, "Pending");
            oBinding.filter([oFilter]);
        },

        // Sort by amount
        onSortAmount: function () {
            var oList = this.byId("reqList");
            var oBinding = oList.getBinding("items");

            var oSorter = new Sorter("Amount", true); // descending
            oBinding.sort(oSorter);
        },

        // Show details
        onSelect: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();

            this.byId("detailBox").bindElement(oContext.getPath());
        }
    });
});