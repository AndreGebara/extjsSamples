
Ext.define("MVVMSample.view.PlayerPanel",{
    extend: "Ext.panel.Panel",
	requires:['MVVMSample.view.PlayerPanelController',
	'MVVMSample.view.PlayerPanelModel'
	],
	xtype: 'mvcvm-playerPanel',
    controller: "playerpanel",
    viewModel: {
        type: "playerpanel"
    },
	items: [{
		xtype: 'panel',
		title: 'Your Video',
		items: [{
			padding: '100 20 50 200',
			html: "<embed width='640' height='385' allowfullscreen frameborder='0' src='http://www.youtube.com/v/XGSy3_Czz8k'>"
		}]
	}]
});
