sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zpraticamodelbf.controller.View1", {
        onInit: function () {
            var oModelJson = new JSONModel({
                name: 'Teste',
                showSecondName: true
            })
        }
    });
});
