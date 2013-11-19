// -------------------------------------------------------------------
// Example 1: Basic usage
// -------------------------------------------------------------------

// Load modules and use them (these can be paths)
require(['module1'], function(module1ref) {

    // do something with the loaded modules
    var module1 = new module1ref();
    var container = document.getElementById('container');
    container.innerHTML = 'Module 1 says its Name is ' + module1.getName();
});