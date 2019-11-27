//Turno
var turnoController = function($scope, $mdToast, turnoApi) {

  $scope.turno = {};

  $scope.cadastrar = function() {

    turmaApi.cadastrar($scope.turno)
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

app.controller('turnoController', turnoController);
