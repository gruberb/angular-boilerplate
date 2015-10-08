angular
  .module('application.home')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$state'];

function HomeController($scope, $state) {
    $scope.home = 'Home Controller';
}
