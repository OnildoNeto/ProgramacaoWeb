//Turma
var turmaController = function($scope, $mdToast, turmaApi) {

  $scope.turma = {};

  $scope.cadastrar = function() {

    turmaApi.cadastrar($scope.turma)
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

app.controller('TurmaController', turmaController);
