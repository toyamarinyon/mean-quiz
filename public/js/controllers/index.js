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

  $scope.answerNo;

  $scope.sendAnswer = function() {
    $http.get('/answer/send/' + $scope.answerNo)
      .success(function(data) {
        alert('Q'+data.q_no+'の回答に'+data.a_no+'を選択しました。');
      })
      .error(function() {
      });
  };

  $scope.logout = function() {
    $http.get('/logout')
      .success(function(data) {
        $rootScope.viewEvent = 'logout';
        $location.path('/login');
      })
      .error(function() {
      });
  };
}]);
