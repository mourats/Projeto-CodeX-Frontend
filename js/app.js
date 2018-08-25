var app = angular.module('myApp', ['ab-base64']);

app.controller('myCtrl', function($scope, $http,$window,base64) {

  $scope.usuario = "";
  $scope.senha = "";

$scope.admin_function = function(){
  $('#myModal').modal('show')
};

$scope.login = function(){
 var auth =  base64.encode('admin' + ":" + 'admin');
  return auth;
}

}); 