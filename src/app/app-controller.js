angular
  .module('application')
  .controller('ApplicationController', ApplicationController);

ApplicationController.$inject = [];

function ApplicationController() {
  var app = this;
  app.pageTitle = 'AngularBoilerplate';
}
