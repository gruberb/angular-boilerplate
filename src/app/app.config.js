(function() {
  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  function ApplicationConfig($urlRouterProvider, $httpProvider, $translateProvider) {
    $urlRouterProvider.otherwise('home');
    $translateProvider.registerAvailableLanguageKeys(['de_DE', 'en_EN'], {
      'de_*': 'de_DE',
      'en_*': 'en_EN'
    });
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/locale/locale-',
      suffix: '.json'
    });

    $translateProvider.use('en_EN');
  }
})();
