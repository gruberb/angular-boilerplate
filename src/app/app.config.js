(function() {
  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  ApplicationConfig.$inject = ['$urlRouterProvider', '$httpProvider'];

  function ApplicationConfig($urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('home');
  }
})();
