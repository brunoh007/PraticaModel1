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

            var oRegisterJson = new JSONModel();
            oRegisterJson.loadData("/model/Registers.json");
            this.getView().setModel("oRegisterJson");
        },

        onClosePopup: function () {
            this.getView().byId("dialogRegister").close();
        },

        onInsertRegister: function (oEvent) {

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

                    oDialog.bindElement({path: /dataForm});
                    oDialog.open();
                })
            } else {
                oDialogRegister.open();
            }

        },

        onSaveRegister: function(oEvent){
            let oModelForm = this.getView().getModel().getProperty("/dataForm");

            let oModelTable = this.getView().getModel().getProperty("/dataTable");


            let sSexo = this.getView().byId("selectedSexo").getSelectedKey(); 

            oModelTable.push(oModelForm);

            oEvent.getSource().getParent().destroy();

            this.getView().getModel().setProperty("/dataTable", oModelTable);


            let oModelFormNew = Object.create(oModelForm);

            for (const property in oModelFormNew) {
                oModelFormNew[property] = "";
            };

            this.getView().getModel().setProperty("/dataForm", oModelFormNew);

            this.byId("customerTable").getBinding("items").refresh();

            this.getView().byId("dialogRegister").close();
        }

        
    });
});
