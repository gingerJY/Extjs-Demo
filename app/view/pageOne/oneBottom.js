Ext.define('MaiJiangDou.view.pageOne.oneBottom', {
    extend: 'Ext.tab.Panel',
    xtype: 'one-bottom',

    uses: [
        'MaiJiangDou.view.pageOne.bottom.botForm',
        'MaiJiangDou.view.pageOne.bottom.botGrid'
    ],

    defaults: {
        scrollable: true
    },
    items: [{
        title: '基本信息',
        xtype:'botForm',
    }, {
        title: '订单信息',
        xtype:'botGrid',
    }]
});