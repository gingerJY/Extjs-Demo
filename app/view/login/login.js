Ext.define('MaiJiangDou.view.login.login', {
    extend: 'Ext.window.Window', 
    xtype: 'login',

    requires: [
        'Ext.form.Panel',
        'MaiJiangDou.view.login.loginController'
    ],

    controller: 'login', 

    title: '登录',

    closable: false, //不可关闭
    resizable: false, //不可伸缩
    autoShow: true,//自动显示
    modal: true, //隐藏其他组件
    items: [
        {
            xtype: 'form',
            reference: 'form', //指定组件层级
            bodyPadding: 10, 
            items: [
                {
                    xtype: 'textfield',
                    name: 'userName',
                    labelWidth: 65,
                    fieldLabel: '用户名',
                    allowBlank: false,
                    emptyText: '请输入用户名'
                }, 
                {
                    xtype: 'textfield',
                    name: 'password',
                    labelWidth: 65,
                    inputType: 'password',
                    fieldLabel: '密　码',
                    allowBlank: false,
                    emptyText: '请输入密码',
                }
            ]
        }
    ],
    buttonAlign: 'center',
    buttons: [
        {
            text: '登录',
            iconCls:'x-fa fa-sign-in',
            formBind: true,//按钮是否可用取决于form
            listeners: { 
                click: 'onLoginClick'
            }
        }, 
        {
            text: '重置',
            iconCls:'x-fa fa-refresh',
            listeners: {
                click: 'onReset'
            }
        }
    ]
});