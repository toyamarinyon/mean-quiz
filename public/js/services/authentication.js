'use strict';

//Authentication service used for user auth.
angular.module('mean.authentication')
  .factory('Authentication', ['$http', function($http) {
    var handler = {
      login: function(){},
      logout: function(){},
      error: function(){}
    };

    return {
      run: function() { 
              $http.get('/is_logged_in')
                .success(function(data, status, headers, option) {
                  if ( data.result ) {
                    handler.login(data.loginUser);
                  }
                  else {
                    handler.logout();
                  }
                })
                .error(function(data, status, headers, option) {
                  handler.error();
                })
            },
      when: function(event, callback) { 
              handler[event] = callback;
              return this;
            }
    };
  }]);
