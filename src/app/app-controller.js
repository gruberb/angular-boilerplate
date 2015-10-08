angular
  .module('application')
  .controller('ApplicationController', ApplicationController);

ApplicationController.$inject = ['$rootScope', '$scope', '$state'];

function ApplicationController($rootScope, $scope, $state) {
    $scope.test = 'Test';
}
