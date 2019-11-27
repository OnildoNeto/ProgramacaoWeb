var cursoController = function($scope, $mdToast, cursoApi) {

  $scope.curso = {};

  $scope.cadastrar = function() {

    cursoApi.cadastrar($scope.curso)
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

app.controller('CursoController', cursoController);
