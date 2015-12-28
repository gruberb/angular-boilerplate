(function() {
  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  function ApplicationConfig($urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('home');
  }
})();
