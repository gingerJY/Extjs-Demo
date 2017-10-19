Ext.define('MaiJiangDou.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'MaiJiangDou.view.main.MainController',
        'MaiJiangDou.view.main.MainModel',
        'MaiJiangDou.view.main.region.top',
        'MaiJiangDou.view.main.region.left',
        'MaiJiangDou.view.main.region.center'
    ],

    controller: 'main',
    viewModel: 'main',
    
    referenceHolder: true,

    layout : 'border', 
    defaults:{
        collapsible: true,
        split: true
    },
    items : [
        {
            reference:'mainTop',
            xtype : 'main-top',
            region : 'north',
            collapsible: false,
            split: false,
            height:50
        },
        {
            reference:'mainLeft',
            xtype : 'main-left',
            region : 'west', 
            width : 220,

        }, 
        {
            reference:'mainCenter',
            region : 'center', 
            xtype : 'main-center',
            collapsible: false,
            split: false,
        }
    ]
});