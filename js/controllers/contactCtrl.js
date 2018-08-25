app.controller('myCtrlContact', function($scope, $http) {
  $http.get("https://codex-api.herokuapp.com/contact")
  .then(function(response) {
    $scope.description = response.data.description;
    $scope.address = response.data.address;
    $scope.phoneNumber = response.data.phoneNumber;
    $scope.email= response.data.email;
    console.log(response.data)
  });

  $scope.sendEmail = function sendEmail() {

  const email = {
  "senderName": $scope.nome,
  "senderEmail": $scope.emailContato,
  "subject": $scope.subject,
  "body": $scope.body
  };

  $http.post('https://codex-api.herokuapp.com/contact/email', email).
    then(function (response) {

  if (response.status == 200)
    window.alert("Email com sucesso!");


  else
    window.alert("Falha ao enviar o email!");
})
}

}
);
