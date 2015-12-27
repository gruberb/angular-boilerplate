(function() {
  'use strict';

  angular
    .module('application')
    .controller('ApplicationController', ApplicationController);

  function ApplicationController() {
    var app = this;
    app.pageTitle = 'AngularBoilerplate';
  }
})();
