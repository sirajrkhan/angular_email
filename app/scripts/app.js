'use strict';

/**
 * @ngdoc overview
 * @name angularEmailApp
 * @description
 * # angularEmailApp
 *
 * Main module of the application.
 */
angular
  .module('angularEmailApp', [
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
    .when('/contact',{
        templateUrl: 'views/contact.html'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
