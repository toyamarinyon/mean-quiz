'use strict';

angular.module('mean').controller('QController', ['$scope', '$window', '$http', '$location', '$routeParams', function ($scope, $window, $http, $location, $routeParams) {
  $scope.title = 'Q' + $routeParams.questionNo;
  $scope.qn = $routeParams.questionNo;
}]);

angular.module('mean').controller('QuestionController', ['$scope', '$window', '$http', '$location', '$routeParams', function ($scope, $window, $http, $location, $routeParams) {
  $http.get('/question/'+$routeParams.questionNo)
    .success(function(data) {
      $scope.question = data;
    })
    .error(function() {
    });

  $scope.choicer = [];
  $scope.confirm = function() {
    $http.get('/answer/'+$routeParams.questionNo)
      .success(function(data) {
        var tmp = [0,0,0,0,0];
        for ( var i=0; i<data.length; i++ ) {
          tmp[data[i]._id] = data[i].count;
        }
        $scope.choicer = tmp;
      })
      .error(function() {
      });
  }
  $scope.right = function() {
    for ( var i=1; i<5; i++ ) {
      if ( i == $scope.question.answer ) { continue;}
      $scope['choiceClass'+i] = 'false';
    }
  }
}]);
