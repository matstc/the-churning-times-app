angular.module 'theChurningTimesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]
  .config ($routeProvider) ->
    $routeProvider
      .when('/', {
        title: 'The Churning Times',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        title: 'About',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/article/:id', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  .run ['$location', '$rootScope', ($location, $rootScope) ->
    $rootScope.$on '$routeChangeSuccess', (event, current, previous) ->
      if (current.$$route.title)
        $rootScope.title = current.$$route.title
        $rootScope.shareTitle = current.$$route.title
        $rootScope.shareImage = null
        $rootScope.shareDescription = null
  ]
