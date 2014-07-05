angular.module('theChurningTimesApp').factory('ArticleService', function ($http) {
  var service = {};

  service.fetchRecent = function(){
    return $http({method:'GET', url:'http://api.thechurningtimes.com/articles/recent.json'});
  };

  service.fetch = function(id){
    return $http({method:'GET', url:'http://api.thechurningtimes.com/articles/'+id+'.json'});
  };

  service.create = function(data){
    data['_method'] = 'PUT';
    return $http({method:'POST', url:'http://api.thechurningtimes.com/articles.json', data: data});
  };

  return service;
});
