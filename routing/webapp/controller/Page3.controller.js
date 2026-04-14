sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.routing.routing.controller.Page3", {
        onGoToPage4: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage4");
        },

        onBack: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage2");
        }
    });
});
