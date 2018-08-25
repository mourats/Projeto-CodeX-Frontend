var app = angular.module('myApp', ['ab-base64']);

app.controller('myCtrl', function($scope, $http,base64) {

  $scope.usuario = "";
  $scope.senha = "";

$scope.login = function(){
 var auth =  base64.encode('admin' + ":" + 'admin');
  return auth;
}

}); 