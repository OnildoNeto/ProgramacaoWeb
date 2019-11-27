//Disciplina
var disciplinaController = function($scope, $mdToast, disciplinaApi) {

  $scope.disciplina = {};

  $scope.cadastrar = function() {

    disciplinaApi.cadastrar($scope.disciplina)
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

app.controller('DisciplinaController', disciplinaController);
