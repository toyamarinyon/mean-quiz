'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$window', '$http', '$route', function ($scope, Global, $window, $http, $route) {
    $scope.global = Global;
    $scope.guestLogin = function () {
        if ( ($window.mockWindow || $window).confirm('facebookログインすると、これからの記録をずっと残すことができます。\nそれでもゲストログインしますか？') ) {
            var guest = $http.get('/users/guest');
            $http.post('/users/session', {'email':guest.email,'password':'123456'})
                .success(function () {
                    ($window.mockWindow || $window).alert('ゲストでログインします。\n明日はfacebookログインしてみてね。');
                })
                .error(function () {
                });
        }
    };
}]);
