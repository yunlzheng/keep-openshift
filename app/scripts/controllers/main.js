'use strict';

angular.module('keepOpenshiftApp')
  .controller('MainCtrl', function ($scope) {
    $scope.menuState = {
    	show: false
    };

    $scope.toggleToggle = function() {

    	$scope.menuState.show = !$scope.menuState.show;

    }

  });
