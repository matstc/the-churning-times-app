angular.module('theChurningTimesApp').controller('ArticleCtrl', function ($scope, $routeParams, ArticleService) {
  ArticleService.fetch($routeParams.id).success(function(data){
    $scope.article = data;
  });

  $scope.shareOnTwitter = function(){
    open('https://twitter.com/share?' + 'text=' + document.title + '&via=churningtimes&url=' + location.href.replace('#','%23'));
  };
});

