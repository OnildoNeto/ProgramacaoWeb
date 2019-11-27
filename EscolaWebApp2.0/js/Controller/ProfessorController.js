//Professor
var professorController = function($scope, $mdToast, professorApi) {

  $scope.professor= {};

  $scope.cadastrar = function() {

    professorApi.cadastrar($scope.professor)
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

app.controller('ProfessorController', professorController);
