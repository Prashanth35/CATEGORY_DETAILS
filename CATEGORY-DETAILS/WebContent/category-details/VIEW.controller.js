sap.ui.controller("category-details.VIEW", {


	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
		 oModel.loadData("model/model.json");
		this.getView().setModel(oModel)
	},


	handleOpen : function (oEvent) {
		var oModel=sap.ui.getCore().getModel(oModel)
		var oButton = oEvent.getSource();

		// create action sheet only once
		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment(
				"fragmentViews.Category",
				this
			);
			this.getView().addDependent(this._actionSheet);
		}
		
		this._actionSheet.setModel(oModel)

		this._actionSheet.openBy(oButton);
	},
	actionSelected : function(oEvent){
		sap.m.MessageToast.show("Selected action is '" + oEvent.getSource().getText() + "'");
	}
	
	

	
	
	


});