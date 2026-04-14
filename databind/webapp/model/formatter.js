 sap.ui.define([], function () {
    "use strict";

    return {
        amountState: function (amount) {
            if (amount > 500000) {
                return "Error"; // red
            } else if (amount > 200000) {
                return "Warning"; // orange
            }
            return "Success"; // green
        }
    };
});