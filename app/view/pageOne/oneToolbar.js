Ext.define('MaiJiangDou.view.pageOne.oneToolbar',{
	extend: 'Ext.toolbar.Toolbar',
	xtype:'one-toolbar',

	items:[
		{
			text:'新增1',
			iconCls:'x-fa fa-plus',
			handler: 'addWin1'
		},
		{
			text:'新增2',
			iconCls:'x-fa fa-plus',
			handler: 'addWin2'
		},
		{
			text:'绑定',
			iconCls:'x-fa fa-plus',
			// handler: 'bindWin'
		},
		{
			text:'编辑',
			iconCls:'x-fa fa-edit',
			//handler: 'editWin'
		},
		{
			text:'删除',
			iconCls:'x-fa fa-times',
			//handler: 'del'
		},
		{		
			text:'查询',
			iconCls:'x-fa fa-search',	
			//handler: 'onSearch'	
		},
		{
			text:'重置',
			iconCls:'x-fa fa-refresh',
			//handler: 'reset'	
		}
	]
});     