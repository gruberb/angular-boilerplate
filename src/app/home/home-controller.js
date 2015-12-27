angular
  .module('application.home')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$state'];

function HomeController($state) {
  var home = this;
  home.title = 'Home';
}
