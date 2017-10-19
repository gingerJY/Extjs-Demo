Ext.define('MaiJiangDou.view.pageOne.popups.oneAdd',{
	extend:'Ext.form.FormPanel',
	xtype:'oneAdd',
	id:'oneAdd',
	layout:'column',
    defaults:{
        style:'float:left;margin:4px;',
        columnWidth: 0.49,
        msgTarget: 'side'
    },

	defaultType:'textfield',
	fieldDefaults:{
        labelAlign:'right',
        labelWidth:84                                 
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
			fieldLabel: '组织架构编码',
			name: 'organizationCode'
		},
		{
			allowBlank: false,
			fieldLabel: '组织架构名称',
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
			columnWidth: 0.98
		},
		{
			fieldLabel: '备注',
			name: 'note',
			columnWidth: 0.98
		}
	]
	
})