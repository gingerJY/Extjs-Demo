Ext.define('MaiJiangDou.view.pageOne.bottom.botGrid', {
    extend: 'Ext.grid.Panel',
    alias:'widget.botGrid',

    requires: [
        'MaiJiangDou.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email'},
        { text: 'Phone', dataIndex: 'phone',flex:1}
    ]

});