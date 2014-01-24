'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$window', '$http', '$location', function ($scope, Global, $window, $http, $location) {
    $scope.global = Global;
    $scope.guestLogin = function () {
        if ( ($window.mockWindow || $window).confirm('facebookログインすると、これからの記録をずっと残すことができます。\nそれでもゲストログインしますか？') ) {
            $http.get('/guest')
                .success(function (guest_user) {
                    $http.post('/users/session', {'email':guest_user.email,'password':'123456'})
                        .success(function () {
                            $http.post('/guest/use');
                            ($window.mockWindow || $window).alert('ゲストでログインします。\n明日はfacebookログインしてみてね。');
                            $location.path('/');
                        })
                        .error(function () {
                        });
                });
        }
    };
}]);
