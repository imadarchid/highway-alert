'use strict';

/**
 * @ngdoc function
 * @name highwayApp.controller:LivemapCtrl
 * @description
 * # LivemapCtrl
 * Controller of the highwayApp
 */
angular.module('highwayApp')
  .controller('LivemapCtrl', function ($scope) {
    $scope.map = { center: { latitude: 31.900149, longitude: -8.024826 }, zoom: 4 };
  });
