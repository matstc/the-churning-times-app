'use strict';

/**
 * @ngdoc function
 * @name theChurningTimesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theChurningTimesApp
 */
angular.module('theChurningTimesApp').controller('MainCtrl', function ($scope, ArticleService) {
  $scope.headline = "";
  $scope.lead = "";
  $scope.author = "";

  $scope.submit = function(){
    console.log('Submitting ' + $scope.headline);
    ArticleService.create({article: {headline:$scope.headline, author:$scope.author, lead:$scope.lead}}).success(function(data){
      location.href = '#/article/' + data.id;
    });
  };
});
