'use strict';

angular.module('mean').controller('IndexController', ['$scope', '$window', '$http', '$location', 'Authentication', function ($scope, $window, $http, $location, Authentication) {
  Authentication.isLoggedIn(
    null,
    function(){$location.path('/login');}
  );
  $scope.viewTransition = 'left';
}]);
