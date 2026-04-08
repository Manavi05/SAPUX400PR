sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View19", {

        onOpenFragment: function () {
            var oView = this.getView();

            // Create dialog only once
            if (!this._oDialog) {
                this._oDialog = sap.ui.xmlfragment(
                    "demo.practice.practice.view.Dialog",
                    this
                );
                oView.addDependent(this._oDialog);
            }

            this._oDialog.open();
        },

        onCloseFragment: function () {
            if (this._oDialog) {
                this._oDialog.close();
            }
        }

    });
});