'use strict';

angular.module('mean').controller('QuestionController', ['$scope', '$window', '$http', '$location', '$routeParams', function ($scope, $window, $http, $location, $routeParams) {
  $http.get('/question/'+$routeParams.questionNo)
    .success(function(data) {
      $scope.question = data;
    })
    .error(function() {
    });
}]);
