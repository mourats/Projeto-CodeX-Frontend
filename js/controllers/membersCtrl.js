app.controller('myCtrlMembers', function($scope, $http) {
  $http.get("https://codex-api.herokuapp.com/members")
  .then(function(response) {
    $scope.nameOne = response.data[0].name;
    $scope.roleOne = response.data[0].role;
    $scope.photoUrlOne = response.data[0].photoUrl;

    $scope.nameTwo = response.data[1].name;
    $scope.roleTwo = response.data[1].role;
    $scope.photoUrlTwo = response.data[1].photoUrl;

    $scope.nameThree = response.data[2].name;
    $scope.roleThree = response.data[2].role;
    $scope.photoUrlThree = response.data[2].photoUrl;
      console.log(response.data)
  });
});
