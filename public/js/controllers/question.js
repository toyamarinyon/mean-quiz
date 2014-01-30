'use strict';

angular.module('mean').controller('QuestionController', ['$scope', '$window', '$http', '$location', '$rootParam', function ($scope, $window, $http, $location, $rootParam) {
  $http.get('/question/'+$rootParam.questionNo)
    .success(function(data) {
      $scope.choices = data.choices;
    })
    .error(function() {
    });
}]);
