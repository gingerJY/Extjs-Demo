Ext.define('MaiJiangDou.view.pageOne.oneController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.one',

    // *********新建**********
    addWin1: function () {
        var newWin = Ext.create('MaiJiangDou.view.pageOne.popups.oneAdd');          
        newWin.window = new Ext.Window({
            title: '新建两列480',
            id: 'newWin',
            width: 480,
            modal: true,
            resizable: false,
            closeAction: 'destroy',
            plain: true,
            //buttonAlign: 'center',
            constrainHeader:true,
            items: newWin,
        	buttons: [
	            {
	                text: '提交',
	                scope: this,
	                //handler:"saveAddInfo"	                
	            },
	            {
	            	text:'关闭',
	            	handler:function() {
	                    newWin.window.destroy();
	                }
	            }
            ]
        });
        newWin.window.show();
    },
    addWin2: function () {
        var newWin = Ext.create('MaiJiangDou.view.pageOne.popups.oneAdd2');          
        newWin.window = new Ext.Window({
            title: '新建一列320',
            id: 'newWin',
            width: 320,
            modal: true,
            resizable: false,
            closeAction: 'destroy',
            plain: true,
            //buttonAlign: 'center',
            constrainHeader:true,
            items: newWin,
        	buttons: [
	            {
	                text: '提交',
	                scope: this,
	                //handler:"saveAddInfo"	                
	            },
	            {
	            	text:'关闭',
	            	handler:function() {
	                    newWin.window.destroy();
	                }
	            }
            ]
        });
        newWin.window.show();
    },

    /*bindWin: function () {
        var newWin = Ext.create('MaiJiangDou.view.pageOne.popups.rowEditing');          
        newWin.window = new Ext.Window({
            title: '绑定',
            //id: 'newWin',
            width: 400,
            height:400,
            modal: true,
            resizable: false,
            closeAction: 'hide',
            plain: true,
            //buttonAlign: 'center',
            constrainHeader:true,
            items: newWin,
            buttons: [
                {
                    text: '提交',
                    scope: this,
                    //handler:"saveAddInfo"                 
                },
                {
                    text:'关闭',
                    handler:function() {
                        newWin.window.hide();
                    }
                }
            ]
        });
        newWin.window.show();
    },*/

})