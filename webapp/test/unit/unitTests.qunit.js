/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mentoriafiorika/zpratica-model-bf/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
