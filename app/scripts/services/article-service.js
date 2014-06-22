angular.module('theChurningTimesApp').factory('ArticleService', function ($http) {
  var service = {};

  service.fetchRecent = function(){
    return $http({method:'GET', url:'http://127.0.0.1:3000/articles.json'});
  };

  service.fetch = function(id){
    return $http({method:'GET', url:'http://127.0.0.1:3000/articles/'+id+'.json'});
  };

  service.create = function(data){
    data['_method'] = 'PUT';
    return $http({method:'POST', url:'http://127.0.0.1:3000/articles.json', data: data});
  };

  return service;
});
