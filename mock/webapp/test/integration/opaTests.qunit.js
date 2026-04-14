/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/mock/mock/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
