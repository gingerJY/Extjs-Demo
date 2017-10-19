Ext.define('MaiJiangDou.view.login.loginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',
    onLoginClick: function() {

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });
    },

    onReset: function() {
        var form = this.lookupReference('form');
        form.getForm().reset();
    }
})