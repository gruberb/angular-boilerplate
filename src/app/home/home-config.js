angular
  .module('application.home', ['ui.router'])
  .config(HomeConfig);

HomeConfig.$inject = ['$stateProvider'];

function HomeConfig($stateProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeController',
        templateUrl: 'home/home.tpl.html'
      }
    }
  });
}
