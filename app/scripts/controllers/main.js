'use strict';

angular.module('bookroadOpenshiftApp')
  .controller('MainCtrl', function ($scope) {
    
    var books = [
       { name: '代码简洁之道'},
       { name: '重构改善既有代码的质� '}
    ];

    $scope.books = books;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
