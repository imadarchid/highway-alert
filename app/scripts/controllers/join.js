'use strict';

/**
 * @ngdoc function
 * @name highwayApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the highwayApp
 */
angular.module('highwayApp')
  .controller('JoinCtrl', function ($scope, $timeout, $window, notify, $rootScope, Facebook) {

    $scope.logged = false;
    $scope.deco = true;



$scope.loginStatus = 'disconnected';
          $scope.facebookIsReady = false;
          $scope.user = null;
          $scope.login = function () {
           
            Facebook.login(function(response) {
              $rootScope.loginStatus = response.status;

              if (response.status === 'connected') {
                $window.location.href = '#/profile';
                $scope.logged = true;
                $rootScope.connected = true;

              }else{
                notify('Une erreur est survenue, veuillez ressayer')
              }


              
            });
          };
          $scope.removeAuth = function () {
            Facebook.api({
              method: 'Auth.revokeAuthorization'
            }, function(response) {
              Facebook.getLoginStatus(function(response) {
                $scope.loginStatus = response.status;

              });
            });
          };

          $scope.deco = function() {
            FB.logout(function(response) {
              console.log('user is now logged out')
            });
        }

          
          
            Facebook.api('/me', function(response) {
              $rootScope.user = response;
              

            });
          
          $scope.$watch(function() {
              return Facebook.isReady();
            }, function(newVal) {
              if (newVal) {
                $scope.facebookIsReady = true;
              }
            }


          );

          if($rootScope.loginStatus === 'connected'){
      $scope.connected = true;
    }else{
      $rootScope.connected = false;
    }
    
        });



