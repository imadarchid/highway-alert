'use strict';

/**
 * @ngdoc function
 * @name highwayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the highwayApp
 */
angular.module('highwayApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {




$scope.data = [{
        date: '13/12/2016 00:21',
        title: 'Accident poids-lourd autoroute A7 (Marrakech - Casa)',
        desc: 'Un poids-lours (15t) a percuté 2 voitures vers la sortie Berrechid, ce qui a bloqué la circulation. Les secours et les services de dépannages sont arrivés sur place, et évacuent la voie. Bouchon à prévoir, veuillez éviter ce tronçon si possible',
        degree: 'Très Grave',
        category: 'Bouchon',
        traffic: 'Dense'
    }, {
        date: '13/12/2016 12:21',
        title: 'Travaux sur la voie D16 de lautouroute A7',
        desc: 'Travaux de réparation, et installation de paneaux sur une partie du tronçon D16/A7.',
        degree: 'Moyen',
        category: 'Travaux',
        traffic: 'Bouchon (Circulation à 60Kmh)'
    }, {
        date: '[Prévision] 17/09/2016 17:00',
        title: 'Bouchons prévus (Vacances scolaires)',
        desc: 'Large flux de voyageurs prévu sur les gares de péages : Berrechid, Amskroud VDP, Settat, Fes, Tanger vers 17h',
        degree: 'null',
        category: 'Bouchon',
        traffic: 'aucune donnée'
    }];

    // YOU CAN CHANGE THIS METHOD
    // AND GET DATA FROM A SERVER USING 
    // http.get()
    // AND GET JSON DATA
    
    

  });
