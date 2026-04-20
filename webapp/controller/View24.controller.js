sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View1", {

        onCopyText: function () {
            var sText = this.byId("inputText").getValue();

            if (navigator.clipboard) {

                navigator.clipboard.writeText(sText).then(function () {
                    MessageToast.show("Copied to clipboard");
                }).catch(function () {
                    MessageToast.show("Copy failed");
                });

            } else {

                // Fallback
                var oInput = this.byId("inputText");
                oInput.$().find("input").select();
                document.execCommand("copy");

                MessageToast.show("Copied to clipboard");
            }
        }

    });
});