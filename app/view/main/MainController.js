/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MVVMSample.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickButton: function () {
		var additionalParams ={
			'callback': onConfirm,
			'scope': profile
		}
         gapi.auth.signIn(additionalParams, onConfirm);
    },

    onConfirm: function (authResult) {
		if(authResult['status']['signed_in']){
			var signinButton = Ext.ComponentManager.get('signin_button');
			signinButton.setVisible(false);
			var signoutButton = Ext.ComponentManager.get('signout_button');
			signoutButton.setVisible(true);
    	}
	}
});
