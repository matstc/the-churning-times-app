angular.module('theChurningTimesApp').controller 'ArticleCtrl', ($rootScope, $scope, $routeParams, $timeout, ArticleService) ->
  $timeout -> twttr.widgets.load() # renders the timeline

  ArticleService.fetch($routeParams.id).success (data) ->
    $scope.article = data
    $rootScope.title = $scope.article.headline

  extractURL = -> location.href.replace('#','%23')

  $scope.shareOnTwitter = ->
    open('https://twitter.com/share?' + 'text=' + $scope.article.headline + '&via=churningtimes&url=' + extractURL())

  $scope.shareOnFacebook = ->
    open('https://www.facebook.com/dialog/share?app_id=741440062566027&display=popup&href=' +
      extractURL() +
      '&redirect_uri=' +
      extractURL())
