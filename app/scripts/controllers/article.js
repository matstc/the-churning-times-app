angular.module('theChurningTimesApp').controller('ArticleCtrl', function ($rootScope, $scope, $routeParams, $timeout, ArticleService) {
  $timeout(function () { twttr.widgets.load(); }); // renders the timeline

  ArticleService.fetch($routeParams.id).success(function(data){
    $scope.article = data;
    $rootScope.title = $scope.article.headline;
  });

  var extractURL = function(){ return location.href.replace('#','%23'); };

  $scope.shareOnTwitter = function(){
    open('https://twitter.com/share?' + 'text=' + $scope.article.headline + '&via=churningtimes&url=' + extractURL());
  };

  $scope.shareOnFacebook = function(){
    open('https://www.facebook.com/dialog/share?app_id=741440062566027&display=popup&href=' +
      extractURL() +
      '&redirect_uri=' +
      extractURL());
  };
});

