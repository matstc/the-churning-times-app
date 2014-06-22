angular.module('theChurningTimesApp').controller('ArticleCtrl', function ($scope, $routeParams, ArticleService) {
  ArticleService.fetch($routeParams.id).success(function(data){
    $scope.article = data;
  });
});

