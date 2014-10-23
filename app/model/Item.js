Ext.define('MVVMSample.model.Item', {
    extend: 'Ext.data.Model',
    
    fields: [
	{
		name: 'kind',
		type: 'string'
	},{ 
		name:'item',
		type: 'string'
	},{
		name: 'thumbnail',
		type: 'string'
	},{
		name: 'name',
		type: 'string'
	}]
});
