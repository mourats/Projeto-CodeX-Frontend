app.controller('myCtrlMembers', function($scope, $http) {
  $http.get("https://codex-api.herokuapp.com/members")
  .then(function(response) {
      console.log(response.data)
  });
});
