var enderecoController = function($scope, $mdToast, enderecoApi) {

  $scope.endereco = {};

  $scope.cadastrar = function() {

    enderecoApi.cadastrar($scope.endereco)
      .then(function(response) {})
      .catch(function(error) {});

        var toast = $mdToast.simple()
            .textContent('Ocorreu algum problema no envio de dados')
            .position('left')
            .action('OK')
            .hideDelay(6000);
        $mdToast.show(toast);

      }
    }

app.controller('EnderecoController', enderecoController);
