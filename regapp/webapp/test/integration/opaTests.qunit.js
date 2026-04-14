/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/regapp/regapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
