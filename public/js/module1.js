// no dependencies
define([], function() {

  // return a constructor function
  var returnedModule = function() {
    var _name = 'Module One';
    this.getName = function() {
      return _name;
    }
  };

  return returnedModule;

});