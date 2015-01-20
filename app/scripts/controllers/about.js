'use strict';

/**
 * @ngdoc function
 * @name angularEmailApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularEmailApp
 */
angular.module('angularEmailApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
