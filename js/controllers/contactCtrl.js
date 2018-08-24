app.controller('myCtrlContact', function($scope, $http) {
  $http.get("https://codex-api.herokuapp.com/contact")
  .then(function(response) {
    $scope.description = response.data.description;
    $scope.address = response.data.address;
    $scope.phoneNumber = response.data.phoneNumber;
    $scope.email= response.data.email;
    console.log(response.data)
  });
});
