'use strict';

/**
 * @ngdoc function
 * @name highwayApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the highwayApp
 */
angular.module('highwayApp')
  .controller('ReportCtrl', function ($scope, $rootScope, $firebaseArray, notify) {

    if($rootScope.loginStatus === 'connected'){
      $scope.connected = true;
    }else if($rootScope.loginStatus === 'not_authorized'){
      $rootScope.connected = false;
    }

  	var ref = new Firebase("https://autoroutesmaroc.firebaseio.com");

 	

 
 $scope.data = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.add = function() {
    $scope.data.$add({
      description: $scope.description,
      details: $scope.details,
      category: $scope.category,
      time: $scope.time
    })

    notify('Merci, votre rapport a été envoyé !')

  };


     

     
 });

