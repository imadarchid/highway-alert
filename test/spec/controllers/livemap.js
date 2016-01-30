'use strict';

describe('Controller: LivemapCtrl', function () {

  // load the controller's module
  beforeEach(module('highwayApp'));

  var LivemapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LivemapCtrl = $controller('LivemapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LivemapCtrl.awesomeThings.length).toBe(3);
  });
});
