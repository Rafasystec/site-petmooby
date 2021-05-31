
app.controller('IndexController', function ($scope, $translate,$window, $http) {
  
  $scope.name='';
  $scope.email = '';
  $scope.message = '';
  $scope.telefone = '';    
    
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
    
    
  $scope.redirect = function (url) {
    console.log(url)
    window.location.replace(url);
  };
    
   $scope.sendForm = function () {
       
       var data = {};
       
       data.name = $scope.name;
       data.email = $scope.email;
       data.message = $scope.message;
       data.phone = $scope.telefone;
    
       
       $http.post("https://appboora.com/transferr-rest/rest/user/contact/by/email", data).then(
      function successCallback(response) {
        $scope.name = '';
        $scope.email = '';
        $scope.message = '';
        $scope.telefone = '';
        $window.alert('Email enviado com sucesso!');
          
      },
      function errorCallback(response) {
        $window.alert('Erro no envio do e-mail. Tente novamente mais tarde');
      }
    );
       
       
  };    
});