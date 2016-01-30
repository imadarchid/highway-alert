'use strict';

/**
 * @ngdoc function
 * @name highwayApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the highwayApp
 */
angular.module('highwayApp')
  .controller('ProfileCtrl', function (Facebook, $window, $rootScope, $scope) {

    if($rootScope.loginStatus === 'connected'){
      $scope.connected = true;
    }else if($rootScope.loginStatus === 'not_authorized'){
      $rootScope.connected = false;
    }



$scope.user = null;

 $rootScope.logout = function() {

  Facebook.logout(function(response) {
    notify('Vous vous êtes déconnectés avec succès')
  })

  
  $window.location.href = '#/join';
  $rootScope.connected = false;

 }  


$scope.connected = true;

 $scope.post = function() {
  Facebook.api('/me/feed', 'post', {message: 'Hello, world!'});
},
 

Facebook.api('/me', function(response) {
              $scope.user = response;
              

            });

Facebook.api(
  '/me/picture', 
  'GET',
  {

  },
  function(response) {
    console.log(response) //debug 
      $scope.link = response.data.url;
  }
);


  
});

