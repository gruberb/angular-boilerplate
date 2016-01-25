(function() {
  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  function ApplicationConfig($urlRouterProvider, $httpProvider, $translateProvider) {
    $urlRouterProvider.otherwise('home');
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/locale/locale-',
      suffix: '.json'
    });
    $translateProvider.use('en_EN');
  }
})();
