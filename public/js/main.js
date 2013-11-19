// -------------------------------------------------------------------
// Example 2: Using a config file to include non-modules
// -------------------------------------------------------------------

// Config
require.config({
  paths: {
    'jQuery': 'vendor/jquery-2.0.3.min'
  },
  shim: {
    'jQuery': {
      exports: '$'
    }
  }

  // Other config options include
  // - baseUrl: prefix url
  // - urlArgs: append to paths (for cache busting)
  // - map: set module specific paths
  // - config: set options to sent to modules (API keys, etc)
  // - and more

});

// Load modules and use them (these can be paths)
require(['module2', 'jQuery'], function(module2ref, $) {

  // do something with the loaded modules
  var module2 = new module2ref();
  $('#container').html("Module 2 says that module 1's name is " + module2.getModule1Name());

  setTimeout(function() {
    alert("Happy New Year!")
  }, 3000)

});

