Ext.define('MaiJiangDou.view.pageOne.bottom.botForm', {
    extend: 'Ext.form.Panel',
    alias:'widget.botForm',
  
    layout:'anchor',
    style:'padding:8px 0;',//整体上下padding为8px
    defaults:{
        xtype:'textfield',
        style:'float:left;padding-top:5px;',//每个form
        anchor:'18%'//每行5个
    },
    fieldDefaults:{
        labelAlign:'right',
        labelWidth:70,                             
    },

    items:[{
        fieldLabel: '系统订单号',
        name: 'user',
        emptyText: '请输入'
    },{
        fieldLabel: '姓名',
        name: 'user',
        emptyText: '请输入你的名字'
    },{
        fieldLabel: '客户姓名',
        name: 'user',
        emptyText: '请输入名字'
    },{
        xtype: 'checkboxfield',
        name: 'checkbox1',
        fieldLabel: '货到付款',
    },{
        fieldLabel: '店铺名称',
        name: 'user',
        emptyText: '请输入你的名字'
    },{
        xtype: 'datefield',
        name: 'date1',
        fieldLabel: '订单日期'
    },{
        fieldLabel: '系统订单号',
        name: 'user',
        emptyText: '请输入'
    },{
        fieldLabel: '客户姓名',
        name: 'user',
        emptyText: '请输入名字'
    },{
        fieldLabel: '店铺名称',
        name: 'user',
        emptyText: '请输入你的名字'
    }
    ]
});