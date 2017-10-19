Ext.define('MaiJiangDou.view.pageOne.one', {
    extend: 'Ext.panel.Panel',
    xtype:'one-main',
    controller: 'one',
    uses: [
        'MaiJiangDou.view.pageOne.oneController',
        'MaiJiangDou.view.pageOne.oneToolbar',
        'MaiJiangDou.view.pageOne.oneForm',
        'MaiJiangDou.view.pageOne.oneGrid',
        'MaiJiangDou.view.pageOne.oneBottom',
    ],
    referenceHolder: true,
    layout: 'border',
    height: window.innerHeight-50,

    defaults:{
        collapsible: false,
        split: false
    },

    items: [
        {
            reference:'oneToolbar',
            xtype:'one-toolbar',
            region:'north',
        },
        {
            reference:'oneForm',
            xtype:'one-form',
            region :'north',
            split: true

        },
        {
            reference:'oneGrid',
            xtype:'one-grid',
            region :'center'
        },
        {
            reference:'oneBottom',
            xtype:'one-bottom',
            region :'south',
            height:180,
            split: true
        }
    ],
});