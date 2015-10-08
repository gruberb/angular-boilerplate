angular
  .module('application', [
      'templates-app',
      'templates-common',
      'application.home',
      'ui.router'
  ])
  .run(run);

run.$inject = ['$rootScope', '$state'];

function run($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    console.log('change state');
  });
}
