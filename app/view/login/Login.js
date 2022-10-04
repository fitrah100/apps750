Ext.define('apps750.view.login.Login',{
    extend  :'Ext.window.Window',
    xtype   : 'login-dialog',
    controller: 'login',
    autoShow: true,
    height  :170,
    width   :360,
    layout  :   {
        type: 'fit'
    },
    iconCls: 'fa fa-key fa-lg',
    title  : 'Login',
    closeAction : 'hide',
    closeable   : true,
    draggable   : true, 
    resizeable  : false,
    
    items:  [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 15,
            defaults: {
                xtype:  'textfield',
                anchor: '100%',
                labelWidth: 70,
                allowBlank:false,
                vtype: 'alpanum',
                minLength: 3,
                msgTarget: 'under'
            },
            items: [
                {
                    name:   'user',
                    fieldLabel: 'User',
                    maxLength :25,
                    value : 'loaine'
                },
                {
                    inputType: 'password',
                    name     : 'password',
                    fieldLabel: 'Password',
                    maxLength : 15,
                    vtype    : 'customPass',
                    msgTarget: 'side'
                }
            ]
            ,dockedItems:[
                {
                    xtype   : 'toolbar',
                    dock    : 'bottom',
                    items   : [
                         {      
                             xtype: 'tbfill'
                         },
                         {
                             xtype      : 'button',
                             iconCls    : 'fa fa-times fa-lg',
                             text       : 'Cancel'
                         },
                         {
                             xtype      : 'button',
                             formBind   : true,
                             iconCls    : 'fa fa-sign-in fa-lg',
                             text       : 'Submit'
                         }
                    
                    ]
                }
            ]
     }
    ]

}); 