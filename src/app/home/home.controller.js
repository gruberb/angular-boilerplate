(function() {
  'use strict';
  
  angular
  .module('application.home')
  .controller('HomeController', HomeController);

  function HomeController($state) {
    var home = this;
    home.title = 'Home';
  }
})();
