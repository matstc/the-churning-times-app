angular.module('theChurningTimesApp').factory('ArticleService', function ($http) {
  var service = {};

  service.fetchRecent = function(){
    return $http({method:'GET', url:'http://127.0.0.1:3000/articles.json'});
  };

  return service;
});
