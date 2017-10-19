Ext.define('MaiJiangDou.store.main.mainLeftStore', {
    extend:"Ext.data.TreeStore",
    alias: 'store.mainLeftStore',

    proxy: {  
        type: 'ajax',  
        url: 'app/data/data.json'  
    },  
    root: {  
        expanded: true  
    },  
    autoLoad: true
});