/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MaiJiangDou.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control: {  
        'main-left': {//组件别名，表示要控制的是该组件  
            selectionchange: 'onTreeNavSelectionChange'  
        }  
    }, 

    onLoginOutClick: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },

    onTreeNavSelectionChange: function(selModel, records) {  
        var record = records[0];  
        if (record) {  
            this.redirectTo(record.getId()); 
            alert(record.getId()) 
        }  
    },
});
