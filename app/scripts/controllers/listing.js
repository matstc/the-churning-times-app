angular.module('theChurningTimesApp').controller('ListingCtrl', function ($scope, ArticleService) {
  $scope.articles = [];

  ArticleService.fetchRecent().success(function(data){
    $scope.articles = data;
  });
});

