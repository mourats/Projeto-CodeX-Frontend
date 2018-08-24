app.controller('myCtrlAbout', function($scope, $http) {
  $http.get("https://codex-api.herokuapp.com/about")
  .then(function(response) {
      $scope.description = response.data.description;
      $scope.mission = response.data.mission;
      $scope.vision = response.data.vision;
      $scope.values = response.data.values;
      console.log(response.data)
  });
});
