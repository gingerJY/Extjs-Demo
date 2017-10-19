Ext.define('MaiJiangDou.view.main.region.left', {
    extend: 'Ext.tree.Panel',
    xtype:'main-left',

    title:'导航菜单',
    lines: false,
    rootVisible: false,
    store:Ext.create('MaiJiangDou.store.main.mainLeftStore', {
        storeId: "mainLeftStoreId" 
    }),
});