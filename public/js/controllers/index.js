'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$window', '$http', '$route', function ($scope, Global, $window, $http, $route) {
    $scope.global = Global;
    $scope.guestLogin = function () {
        if ( ($window.mockWindow || $window).confirm('facebookログインすると、これからの記録をずっと残すことができます。\nそれでもゲストログインになさいますか？') ) {
            $http.post('/users', {'name':'アップル','email':'dummy@tamurine.jp','password':'123456'})
                .success(function () {
                    ($window.mockWindow || $window).alert('[ゲスト]アップルさんでログインします。');
                    $scope.global = Global;
                    $route.reload();
                })
                .error(function () {
                });
        }
    };
}]);
