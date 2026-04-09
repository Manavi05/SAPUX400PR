sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.utest.utest.controller.Login", {

        // 🔁 Toggle password visibility
        onTogglePassword: function () {
            var oInput = this.byId("password");

            if (oInput.getType() === "Password") {
                oInput.setType("Text");
                oInput.setValueHelpIconSrc("sap-icon://hide");
            } else {
                oInput.setType("Password");
                oInput.setValueHelpIconSrc("sap-icon://show");
            }
        },

        // 🔍 Validation function
        onValidate: function () {
            var oUser = this.byId("username");
            var oPass = this.byId("password");

            var sUser = oUser.getValue();
            var sPass = oPass.getValue();

            // Username validation
            var userRegex = /^[A-Za-z]{3,10}$/;

            if (!userRegex.test(sUser)) {
                oUser.setValueState("Error");
                oUser.setValueStateText("3-10 letters only (no digits/special chars)");
            } else {
                oUser.setValueState("None");
            }

            // Password validation
            var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=(.*[^A-Za-z0-9]){2,}).{10}$/;

            if (!passRegex.test(sPass)) {
                oPass.setValueState("Error");
                oPass.setValueStateText("Min 10 chars, 1 Upper, 1 Lower, 1 Digit, 2 Special");
            } else {
                oPass.setValueState("None");
            }
        },

        // ✅ Submit
        onSubmit: function () {
            var oUser = this.byId("username");
            var oPass = this.byId("password");

            if (oUser.getValueState() === "None" && oPass.getValueState() === "None") {

                // Green success effect
                oUser.setValueState("Success");
                oPass.setValueState("Success");

                MessageToast.show("Login Successful ✅");

            } else {
                MessageToast.show("Please fix errors ❌");
            }
        },

        // ❌ Cancel
        onCancel: function () {
            this.byId("username").setValue("");
            this.byId("password").setValue("");

            this.byId("username").setValueState("None");
            this.byId("password").setValueState("None");
        }

    });
});