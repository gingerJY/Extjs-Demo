Ext.define('MaiJiangDou.view.pageOne.oneGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'one-grid',

    requires: [
        'MaiJiangDou.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },
    
    selModel: {
        selType: 'checkboxmodel', 
        mode: 'MULTI'
    },
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email'},
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email'},
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email'},
        { text: 'Phone', dataIndex: 'phone',flex:1}
    ]
    // dockedItems: [{
    //     xtype: 'cuspagingtoolbar',
    //     //store: Ext.data.StoreManager.lookup('xxxStore'),
    //     displayInfo: true
    // }],
});