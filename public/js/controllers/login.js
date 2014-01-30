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

  if ( $rootScope.viewEvent == 'logout' ) {
    $scope.viewTransition += ' enterright';
  }

  $scope.guestLogin = function () {
    if ( ($window.mockWindow || $window).confirm('facebookログインすると、これからの記録をずっと残すことができます。\nそれでもゲストログインしますか？') ) {
      $http.get('/guestlogin')
      .success(function(guest_user) {
        ($window.mockWindow || $window).alert('ゲストでログインします。\n明日はfacebookログインしてみてね。');
        $location.path('/');
      })
      .error(function() {
      });
    }
  };
}]);
