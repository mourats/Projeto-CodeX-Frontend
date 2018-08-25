app.controller('myCtrlContact', function($scope, $http, base64) {
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

  var auth =  base64.encode('admin' + ":" + 'admin');

  $http.post('https://codex-api.herokuapp.com/contact/email', {
    
  
  headers: {Authorization: 'Basic ' + auth },
  body: email}).
    then(function (response) {

  if (response.status == 200)
    window.alert("Email com sucesso!");


  else
    window.alert("Falha ao enviar o email!");
})
}

}
);
