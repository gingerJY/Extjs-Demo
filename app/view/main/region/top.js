Ext.define('MaiJiangDou.view.main.region.top', {
    extend: 'Ext.toolbar.Toolbar',
    xtype:'main-top',

    style:'background-color:#35baf6;color:#fff;',
    items:[
        {
            xtype:'label',
            bind:{
                text:'Extjs Demo'
            },
            style:'font-size:20px;font-weight:bold;'
        },'->',
        {
            xtype:'label',
            bind:{
                text:'当前用户：'+'麦豇豆',
            },
        },
        {  
            // text:'注销',
            xtype:'button',
            iconCls:'x-fa fa-power-off',
            handler: 'onLoginOutClick'
        }
    ]
    
});