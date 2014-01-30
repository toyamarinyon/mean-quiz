'use strict';

angular.module('mean').controller('LoginController', ['$scope', '$window', '$http', '$location', 'Authentication', function ($scope, $window, $http, $location, Authentication) {
  Authentication.
    when('login', function() {
      $location.path('/');
    }).
    when('logout', function() {
      $location.path('/login');
    }).
    run();
  $scope.viewTransition = 'right';
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
