Ext.define('MaiJiangDou.view.pageOne.popups.oneAdd2',{
	extend:'Ext.form.FormPanel',
	xtype:'oneAdd2',
	id:'oneAdd2',

	layout:'form',
    defaults:{
        msgTarget: 'side'
    },
	defaultType:'textfield',
	fieldDefaults:{
        labelAlign:'right',
        labelWidth:60                                
    },

	items:[
		{
			allowBlank: false,
            fieldLabel: '上级编码',
            name: 'parentOrganizationCode',
        },
        {
            fieldLabel: '状态',
            name: 'enable',
        },
		{
			allowBlank: false,
			fieldLabel: '架构编码',
			name: 'organizationCode'
		},
		{
			allowBlank: false,
			fieldLabel: '架构名称',
			name: 'organizationName',
		},
		{
			fieldLabel: '联系人',
			name: 'contactName',
		},
		{
			fieldLabel: '联系方式',
			name: 'contactPhone',
		},
		{
			fieldLabel: '地址',
			name: 'contactAddress',
		},
		{
			fieldLabel: '备注',
			name: 'note',
		}
	]
	
})