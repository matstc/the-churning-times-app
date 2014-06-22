'use strict';

/**
 * @ngdoc overview
 * @name theChurningTimesApp
 * @description
 * # theChurningTimesApp
 *
 * Main module of the application.
 */
angular
  .module('theChurningTimesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/article/:id', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
