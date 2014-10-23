Ext.define('MVVMSample.store.Videos', {
	extend: 'Ext.data.Store',
		
	requires: ['MVVMSample.model.Item'],
	
	storeId: 'Videos',
		
	model: 'MVVMSample.model.Item',
		
	proxy: {
		type: 'jsonp',
		url: 'https://www.googleapis.com/youtube/v3search',
		reader: {
			rootProperty: 'kind',
			successProperty: 'success'
		},
		autoLoad: true
	}
});