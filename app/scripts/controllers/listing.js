angular.module('theChurningTimesApp').controller('ListingCtrl', function ($scope, ArticleService) {
  ArticleService.fetchRecent().success(function(data){
    $scope.articles = data;
  });
});

