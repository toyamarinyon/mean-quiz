'use strict';

angular.module('mean').controller('LoginController', ['$scope', '$window', '$http', '$location', '$rootScope', 'Authentication', function ($scope, $window, $http, $location, $rootScope, Authentication) {
  Authentication.
    when('login', function() {
      $location.path('/');
    }).
    when('logout', function() {
      $location.path('/login');
    }).
    run();
  $scope.viewTransition = 'leaveright';
  console.log($rootScope.viewEvent);
  if ( $rootScope.viewEvent == 'logout' ) {
    $scope.viewTransition += ' enterright';
  }
  $scope.guestLogin = function () {
      if ( ($window.mockWindow || $window).confirm('facebookログインすると、これからの記録をずっと残すことができます。\nそれでもゲストログインしますか？') ) {
          $http.get('/guest')
              .success(function (guest_user) {
                  $http.post('/users/session', {'email':guest_user.email,'password':'123456'})
                      .success(function () {
                          $http.post('/guest/use');
                          ($window.mockWindow || $window).alert('ゲストでログインします。\n明日はfacebookログインしてみてね。');
                          $window.reload();
                      })
                      .error(function () {
                      });
              });
      }
  };
}]);
