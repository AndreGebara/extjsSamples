Ext.define('MVVMSample.model.Snippet', {
    extend: 'Ext.data.Model',
    
    fields: [
        'publishedAt', 'channelId', 'title', 'description', 'channelTitle', 'liveBroadcastContent' 
    ],
	hasMany : {model: 'thumbnails', name: 'thumbnails'},
	belongsTo: 'items'
});
