
Ext.define("MVVMSample.view.listVideos",{
	extend: "Ext.panel.Panel",
	requires:[
	'MVVMSample.view.listVideosController',
	'MVVMSample.view.listVideosModel'
	],
	
	xtype: 'listVideosPanel',
	
	controller: "listvideos",
	viewModel: {
		type: 'listVideos'
	},
	items: [{
		xtype: 'panel',
		padding: '10, 5, 3, 10',
		items:[
		{
			xtype: 'grid',
			id: 'videoGrid',
			store: Ext.data.StoreManager.lookup('Videos'),
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'top',
				items:[{
					xtype: 'textfield',
					margin : '10, 5, 3, 10',
					name: 'search',
					id: 'searchInput',
					fieldLabel: 'Search video',
					typeAhead: 'true'
				},
				{
					xtype: 'button',
					margin: '10, 5, 3, 10',
					text: 'Search',
					id: 'search',
					handler: function(){
						var queryParam = Ext.getCmp('searchInput').getValue();
						var videoGrid = Ext.getCmp('videoGrid');
						console.log(videoGrid.store);
					}
					
			}],
			columns: [{
				dataIndex: 'name',
				text: 'Name'
			},{
				dataIndex: 'item',
				text: 'Item'
			}]
		}],
		title: 'Video Grid',
		viewConfig: {
			stripeRows: true
		},
		columns: [{
			text: 'field', dataIndex: 'fields'
		}],
		id: 'videoGrid',
		height: 200,
		width: 500
	}]
}]
});
