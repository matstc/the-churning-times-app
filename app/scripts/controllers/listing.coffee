angular.module('theChurningTimesApp').controller 'ListingCtrl', ($scope, ArticleService) ->
  $scope.articles = []

  ArticleService.fetchRecent().success (data) -> $scope.articles = data
