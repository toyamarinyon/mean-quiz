'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.authentication')
  .factory('Authentication', ['$http', '$cookieStore', function($http, $cookieStore) {
    var loginUser;

    return {
      isLoggedIn: function(login, logout, err) { 
                    $http.get('/is_logged_in')
                      .success(function(data, status, headers, option) {
                        if ( data.result ) 
                          loginUser = data.loginUser;
                          login();
                        else
                          logout();
                      })
                      .error(function(data, status, headers, option) {
                        err();
                      })
                  },
      loginUser: loginUser;

    };
  }]);
