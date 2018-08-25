var app = angular.module('myApp', ['ab-base64']);

app.controller('myCtrl', function($scope, $http,$window,base64) {

  $scope.usuario = "";
  $scope.senha = "";

$scope.admin_function = function(){
  $('#myModal').modal('show')
};

$scope.login = function(){
 var auth =  base64.encode($scope.usuario + ":" + $scope.senha);

 $http.get('https://codex-api.herokuapp.com/', {
  headers: {Authorization: 'Basic ' + auth }
  }).then(function(response) {}, function(response) {
          console.log(response)
      });
}

});