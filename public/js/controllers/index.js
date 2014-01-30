'use strict';

angular.module('mean').controller('IndexController', ['$scope', '$window', '$http', '$location', '$rootScope', 'Authentication', function ($scope, $window, $http, $location, $rootScope, Authentication) {
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
        console.log($rootScope.viewEvent);
        $rootScope.viewEvent = 'logout';
        console.log($rootScope.viewEvent);
        $location.path('/login');
      })
      .error(function() {
      });
  };
}]);
