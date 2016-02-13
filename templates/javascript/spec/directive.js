'use strict';

describe('Directive: <%= cameledName %>', function () {

  // load the directive's module
  beforeEach(module('<%= scriptAppName %>'));

  var element,
    $rootScope,
    $compile,
    scope;

  beforeEach(inject(function ( _$rootScope_ , _$compile_ ) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    scope = $rootScope.$new();
    element = angular.element('<div <%= _.dasherize(name) %>></div>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the <%= cameledName %> directive');
  }));

  it('should make hidden element visible', function() {

  });
});
