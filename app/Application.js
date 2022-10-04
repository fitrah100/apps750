/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
// Ext.require('Packt.view.login.Login');
Ext.define('apps750.Application', {
    extend: 'Ext.app.Application',
    views:[
        'login.Login'
    ],
    name: 'apps750',

    quickTips: false,
  
    platformConfig: {
        desktop: {
            quickTips: true
        }
    }, 

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
    ,init: function () {
        var me = this; // #1
            me.splashscreen = Ext.getBody().mask( // #2
                'Loading application', 'splashscreen'
            );
    }
    ,launch: function () {
        var me = this;
        var task = new Ext.util.DelayedTask(function() {
            //Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            //Fade out the icon and message
            me.splashscreen.next().fadeOut({
            duration: 1000,
            remove:true,
                listeners: { // #1
                    afteranimate: function(el, startTime, eOpts ){//#2
                            Ext.widget('login-dialog');
                    }
                }
            });
        });
            task.delay(2000);
        }
});
