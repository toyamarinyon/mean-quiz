'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).
        when('/question/:questionNo', {
            templateUrl: 'views/question.html',
            controller: 'QuestionController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        // $locationProvider.hashPrefix('!');
    }
]).
run(['$rootScope', function($rootScope) {
  $rootScope.viewEvent = '';
}]);
