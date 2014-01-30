'use strict';

angular.module('mean').controller('IndexController', ['$scope', '$window', '$http', '$location', 'Authentication', function ($scope, $window, $http, $location, Authentication) {
  Authentication.
    when('login', function(loginUser) {
      $scope.user = loginUser;
    }).
    when('logout', function() {
      $location.path('/login');
    }).
    run();
  
  $scope.viewTransition = 'enterleft leaveleft';
  $scope.logout = function() {
    $http.get('/logout')
      .success(function(data) {
        $scope.$broadcast('logout', data);
        $location.path('/login');
      })
      .error(function() {
      });
  };
}]);
