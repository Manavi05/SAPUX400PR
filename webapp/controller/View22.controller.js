sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View1", {

        onCallApi: function () {
            var oButton = this.byId("apiBtn");
            var oText = this.byId("resultText");

            oButton.setBusy(true);
            oButton.setEnabled(false);
            oText.setText("Loading...");

            // Simulate API call with timeout
            setTimeout(function () {
                var sResponse = "API Response received successfully";

                oText.setText(sResponse);
                oButton.setBusy(false);
                oButton.setEnabled(true);
            }, 3000);
        }

    });
});