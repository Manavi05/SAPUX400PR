sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View20", {

        // 🔹 Initialize data
        onInit: function () {

            var oData = {
                employees: [
                    { id: "101", name: "Arun", city: "Chennai" },
                    { id: "102", name: "Bala", city: "Hyderabad" },
                    { id: "103", name: "Cathy", city: "Bangalore" },
                    { id: "104", name: "David", city: "Mumbai" },
                    { id: "105", name: "Eva", city: "Delhi" }
                ]
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        // 🔹 Search filter logic
        onSearch: function (oEvent) {

            var sValue = oEvent.getParameter("newValue");
            var oTable = this.byId("idTable");
            var oBinding = oTable.getBinding("items");

            var aFilters = [];

            if (sValue) {

                var oFilter1 = new Filter("name", FilterOperator.Contains, sValue);
                var oFilter2 = new Filter("city", FilterOperator.Contains, sValue);

                aFilters.push(new Filter({
                    filters: [oFilter1, oFilter2],
                    and: false   // OR condition
                }));
            }

            oBinding.filter(aFilters);
        }

    });
});