angular.module('theChurningTimesApp').controller('ArticleCtrl', function ($rootScope, $scope, $routeParams, $timeout, ArticleService) {
  $timeout(function () { twttr.widgets.load(); }); // renders the timeline

  ArticleService.fetch($routeParams.id).success(function(data){
    $scope.article = data;
    $rootScope.title = $scope.article.headline;
    $rootScope.shareTitle = $scope.article.headline;
    $rootScope.shareImage = $scope.article.picture.source;
    $rootScope.shareDescription = $scope.article.lead;
  });

  var extractURL = function(){ return location.href.replace('#','%23'); };

  $scope.shareOnTwitter = function(){
    open('https://twitter.com/share?' + 'text=' + $scope.article.headline + '&via=churningtimes&url=' + extractURL());
  };

  $scope.shareOnFacebook = function(){
    FB.ui({method: 'share', href: extractURL()}, function(response){
      window.response = response;
      console.log('received response from fb share');
    });
  };
});

