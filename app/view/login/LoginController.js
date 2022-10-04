Ext.define('apps750.view.login.LoginController',{

        extend  : 'Ext.app.ViewController',
        alias   : 'controller.login',

        onTextFieldSpecialKey   : function(field, e, options){},
        onTextFieldKeyPress     : function(field, e, options){},
        OnButtonClickCancel     : function(button, e, options){},
        OnButtonClickSubmit     : function(button, e, options){},
        doLogin                 : function(){ },
        onLoginFailure          : function(form, e, options){},
        onLoginSuccess          : function(form, e, options){}
});