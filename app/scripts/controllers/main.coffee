angular.module('theChurningTimesApp').controller 'MainCtrl', ($scope, ArticleService) ->
  $scope.headline = ""
  $scope.lead = ""
  $scope.author = ""

  $scope.submit = ->
    console.log('Submitting ' + $scope.headline)
    ArticleService.create({article: {headline:$scope.headline, author:$scope.author, lead:$scope.lead}})
    .success (data) -> location.href = '#/article/' + data.id
