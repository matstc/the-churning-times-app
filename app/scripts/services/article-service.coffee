angular.module('theChurningTimesApp').factory 'ArticleService', ($http) ->
  service = {}

  service.fetchRecent = ->
    $http({method:'GET', url:'http://api.thechurningtimes.com/articles/recent.json'})

  service.fetch = (id) ->
    $http({method:'GET', url:'http://api.thechurningtimes.com/articles/'+id+'.json'})

  service.create = (data) ->
    data['_method'] = 'PUT'
    $http({method:'POST', url:'http://api.thechurningtimes.com/articles.json', data: data})

  service
