(function() {
  'use strict';

  angular
    .module('application')
    .controller('ApplicationController', ApplicationController);

  function ApplicationController() {
    var getTheNumber = function(array) {
      var number = 0;

      for(var i = array.length-1; i >= 0; i--) {

        if(array[i] === 0) { continue;}
        number = number + Math.pow(-2, i);
      }

      return number;
    };

    var findSmallest = function(arr) {
      var smallest = arr[0];
      var smallestIndex = 0;

      for(var i = 0; i < arr.length; i++) {
        if(arr[i] < smallest) {
          smallest = arr[i];
          smallestIndex = i;
        }
      }

      return smallestIndex;
    };

    var selectionSort = function(arr) {
      var newArr = [];

      for(var i = 0; i < arr.length; i++) {

      }
    };


    getTheNumber([1,0,0,1,1,1]);


  }
})();
