angular.module('theChurningTimesApp').controller('ArticleCtrl', function ($rootScope, $scope, $routeParams, ArticleService) {
  ArticleService.fetch($routeParams.id).success(function(data){
    $scope.article = data;
    $rootScope.title = $scope.article.headline;
  });

  $scope.shareOnTwitter = function(){
    open('https://twitter.com/share?' + 'text=' + $scope.article.headline + '&via=churningtimes&url=' + location.href.replace('#','%23'));
  };
});

