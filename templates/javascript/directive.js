'use strict';

/**
 * @ngdoc directive
 * @name <%= scriptAppName %>.directive:<%= cameledName %>
 * @description
 * # <%= cameledName %>
 */
angular.module('<%= scriptAppName %>')
  .directive('<%= cameledName %>', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  });
