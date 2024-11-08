sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zpraticamodelbf.controller.View1", {
        onInit: function () {
            var oModelJson = new JSONModel({
                dataTable: [],
                dataForm: {
                    nome, 
                    dtNasc, 
                    sexo,
                    altura
                }
            })
            this.getView().setModel(oModelJson, "model1");
        },

        onClosePopup: function () {
            this.getView().byId("dialogRegister").close();
        },

        onInsertRegister: function () {

            var oView = this.getView(),
                oDialogKids = this.getView().byId("dialogRegister");
            if (!oDialogKids) {
                Fragment.load({
                    id: oView.getId(),
                    name: "mentoria.fiori.ka.zpraticamodelbf.view.dialogRegister",
                    type: "XML",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                oDialogKids.open();
            }

        },

        
    });
});
