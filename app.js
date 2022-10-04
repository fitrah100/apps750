/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'apps750.Application',

    name: 'apps750',

    requires: [
        // This will automatically load all classes in the apps750 namespace
        // so that application classes do not need to require each other.
        'apps750.*'
    ],

    // The name of the initial view to create.
    mainView: 'apps750.view.main.Main',
    autoCreateViewport:  false

});
