'use strict';

describe('Controller: JoinCtrl', function () {

  // load the controller's module
  beforeEach(module('highwayApp'));

  var JoinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JoinCtrl = $controller('JoinCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JoinCtrl.awesomeThings.length).toBe(3);
  });
});
