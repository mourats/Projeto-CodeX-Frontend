app.controller('myCtrl', function($scope, $http) {
  $http.get("https://codex-api.herokuapp.com/services")
  .then(function(response) {
      $scope.webDevelopment = response.data.webDevelopment;
      $scope.systemsDevelopment = response.data.systemsDevelopment;
      $scope.mobileApps = response.data.mobileApps;
      console.log(response.data)
  });
});
