var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

  $http.get('https://codex-api.herokuapp.com/', {
headers: {'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}
}).then(function(response) {}, function(response) {
        console.log(response.data.status)
    });
});
