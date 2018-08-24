app.controller('myCtrlPortifolio', function($scope, $http) {
  $http.get("https://codex-api.herokuapp.com/portfolio")
  .then(function(response) {
      $scope.photoUrlOne = response.data[0].photoUrl;
      $scope.photoUrlTwo = response.data[1].photoUrl;
      $scope.photoUrlThree = response.data[2].photoUrl;

      $scope.nameOne = response.data[0].name;
      $scope.nameTwo = response.data[1].name;
      $scope.nameThree = response.data[2].name;

      console.log(response.data)
  });
});
