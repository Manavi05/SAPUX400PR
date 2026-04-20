sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View23", {

        onLoadData: function () {

            var oPage = this.byId("page");

            // Disable entire UI with busy state
            oPage.setBusy(true);

            // Simulate API call
            setTimeout(function () {
                oPage.setBusy(false);
            }, 3000);

        }

    });
});