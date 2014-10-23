/**
* This class is the main view for the application. It is specified in app.js as the
* "autoCreateViewport" property. That setting automatically applies the "viewport"
* plugin to promote that instance of this class to the body element.
*
* TODO - Replace this content of this view to suite the needs of your application.
*/
Ext.define('MVVMSample.view.main.Main', {
	extend: 'Ext.container.Container',
	requires: [
	'MVVMSample.view.main.MainController',
	'MVVMSample.view.main.MainModel'
	],

	xtype: 'app-main',
    
	controller: 'main',
	viewModel: {
		type: 'main'
	},

	layout: {
		type: 'border'
	},

	items: [{
		xtype: 'panel',
		bind: {
			title: '{name}'
		},
		region: 'east',
		width: 450,
		padding: '20, 10, 6, 20',
		split: true,
		items: [{
			xtype: 'textfield',
			margin: '20, 10, 6, 20',
			name: 'username',
			fieldLabel: 'Username',
			allowBlank: false,
			vtype: 'email'
		},
		
		{
			xtype: 'button',
			margin: '20, 10, 6, 20',
			text: 'Sign in',
			id:'signin_button',
			handler: 'onClickButton'
		},
		{
			xtype: 'button',
			text: 'Sign Out',
			margin: '10 5 3, 10',
			id: 'signout_button',
			hidden: true
		},
		{
			xtype: 'listVideosPanel'
		}
		]
	},
	{
		xtype: 'mvcvm-playerPanel',
		region: 'center'
	}
	]
});
