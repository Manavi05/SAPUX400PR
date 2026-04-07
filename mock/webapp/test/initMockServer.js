 sap.ui.define([
    "demo/mock/mock/test/mockServer",
    "sap/ui/core/ComponentContainer"
], function (mockServer, ComponentContainer) {
    "use strict";

    mockServer.init();

    new ComponentContainer({
        name: "demo.mock.mock",
        settings: {
            id: "demo.mock.mock"
        },
        async: true
    }).placeAt("content");
});