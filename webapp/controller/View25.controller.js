sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/DateFormat"
], function (Controller, DateFormat) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View25", {

        onShowDate: function () {
            var oText = this.byId("dateText");

            var oDate = new Date();

            var oFormatter = DateFormat.getDateInstance({
                pattern: "dd-MM-yyyy"
            });

            var sFormattedDate = oFormatter.format(oDate);

            oText.setText(sFormattedDate);
        }

    });
});