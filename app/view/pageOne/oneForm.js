Ext.define('MaiJiangDou.view.pageOne.oneForm', {
    extend: 'Ext.form.Panel',
    xtype:'one-form',
    id:'oneForm',
    /*//另一种写法，宽度固定，布局是column
    border:false,
    layout:'column',
    defaults: {
        width:180,
        style:'padding:4px 0;',
        labelAlign:'right',
        labelWidth:60,
    },*/

    layout:'anchor',
    border:false,
    defaults:{
        xtype:'textfield',
        style:'float:left;padding-top:5px;',
        anchor:'16%'
    },
    fieldDefaults:{
        labelAlign:'right',
        labelWidth:70                                 
    },

    items:[
        {
            allowBlank: false,
            fieldLabel: '平台订单号',
            name: 'name'
        },
        {
            xtype:'combo',
            fieldLabel:'性别',
            name: 'sex',
            value:1,
            store: Ext.create('Ext.data.Store', {
                fields: ['name', 'val'],
                data: [
                    {name: '男',val: 0},
                    {name: '女',val: 1}
                ]
            }),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'val',
            triggerAction: 'all',
        },
        {
            xtype: 'numberfield',
            name: 'age',
            fieldLabel: '年龄',
            minValue: 0, //prevents negative numbers
            // Remove spinner buttons, and arrow key and mouse wheel listeners
            //hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        },
        {
            xtype: 'datefield',
            fieldLabel:'生日',
            name:'birthday',
        },
        {
            xtype: 'timefield',
            name: 'time',
            fieldLabel: '时间',
            minValue: '6:00 AM',
            maxValue: '8:00 PM',
            increment: 30,
        },
        {
            xtype: 'textfield',
            fieldLabel:'邮箱',
            name:'email',
            vtype:'email',
            msgTarget: 'side'
        },
        {
            fieldLabel: '平台订单号',
            name: 'nation'
        },
        {
            fieldLabel: '平台订单号',
            name: 'phone'
        },
        {
            allowBlank: false,
            fieldLabel: '平台订单号',
            name: 'name'
        }
    ]
});