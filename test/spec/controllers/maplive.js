'use strict';

describe('Controller: MaplivectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('highwayApp'));

  var MaplivectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaplivectrlCtrl = $controller('MaplivectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MaplivectrlCtrl.awesomeThings.length).toBe(3);
  });
});
