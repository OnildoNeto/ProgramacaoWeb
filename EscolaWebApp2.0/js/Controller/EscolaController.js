//Escola
var escolaController = function($scope, $mdToast, escolaApi) {

  $scope.escola = {};

  $scope.cadastrar = function() {

    escolaApi.cadastrar($scope.escola)
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

app.controller('EscolaController', escolaController);
