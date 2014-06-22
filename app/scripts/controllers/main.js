'use strict';

/**
 * @ngdoc function
 * @name theChurningTimesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theChurningTimesApp
 */
angular.module('theChurningTimesApp').controller('MainCtrl', function ($scope) {
  $scope.headline = "";

  $scope.submit = function(){
    console.log('submitting ' + $scope.headline);
  };
});
