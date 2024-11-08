sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
function (Controller, Fragment, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zpraticamodelbf.controller.View1", {
        onInit: function () {
            // var oModelJson = new JSONModel({
            //     dataTable: [],
            //     dataForm: {
            //         nome, 
            //         dtNasc, 
            //         sexo,
            //         altura
            //     }
            // })
            // this.getView().setModel(oModelJson, "model1");

            var oRegisterJson = new JSONModel();
            oRegisterJson.loadData("/model/Registers.json");
            this.getView().setModel(oRegisterJson, "oRegisterJson");
        },

        onClosePopup: function () {
            this.getView().byId("dialogRegister").close();
        },

        onInsertRegister: function () {

            var oView = this.getView(),
                oDialogRegister = this.getView().byId("dialogRegister");
            if (!oDialogRegister) {
                Fragment.load({
                    id: oView.getId(),
                    name: "mentoria.fiori.ka.zpraticamodelbf.view.DialogRegister",
                    type: "XML",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                oDialogRegister.open();
            }

        },

        onSaveRegister: function(){
            this.getView().byId("dialogRegister").close();
        }

        
    });
});
