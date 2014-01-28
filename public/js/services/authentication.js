'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.authentication')
  .factory('Authentication', ['$http', '$cookieStore', function($http, $cookieStore) {
    var currentUser = $cookieStore.get('user');

    return {
      isLoggedIn: function() {
        return ! currentUser === undefined
      },

      login: function(user, success, error) {
        $http.post('/login', user)
          .success(function(user){
            $rootScope.user = user;
            success(user);
            })
          .error(error);
      },

      logout: function(success, error) {
        $http.post('/logout').success(function(){
          $rootScope.user = {
            username : '',
            role : userRoles.public
          };
          success();
        }).error(error);
      }
    };
  }]);
