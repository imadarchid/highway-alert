'use strict';

/**
 * @ngdoc overview
 * @name highwayApp
 * @description
 * # highwayApp
 *
 * Main module of the application.
 */
angular
  .module('highwayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize', 
    'firebase',
    'facebook',
    'cgNotify',
    'uiGmapgoogle-maps',
    'ngTouch'
  ]) 
  


  


  .config(function ($routeProvider, FacebookProvider, uiGmapGoogleMapApiProvider) {

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });

    FacebookProvider.init({ 
      appId: '602889659852397',
      status: true,
      permissions: "email,user_likes", 
      cookie: true, 
      xfbml: true,
      version: 'v2.5'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl',
        controllerAs: 'join'
      })
      .when('/livemap', {
        templateUrl: 'views/livemap.html',
        controller: 'LivemapCtrl',
        controllerAs: 'livemap'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile',
        requiresLogin: true
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report',
        requiresLogin: true
      })
      .otherwise({
        redirectTo: '/'
      });

      
  })

