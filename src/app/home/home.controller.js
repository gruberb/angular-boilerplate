(function() {
  'use strict';

  angular
  .module('application.home')
  .controller('HomeController', HomeController);

  function HomeController($translate) {
    var home = this;

    home.title = 'Home';

    home.toggleLang = function() {
      if ($translate.use() === 'en_EN') {
        $translate.use('de_DE');
      } else {
        $translate.use('en_EN');
      }
    };
  }
})();
