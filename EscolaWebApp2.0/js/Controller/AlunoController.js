var alunoController = function($scope, $mdToast, alunoApi) {

  $scope.aluno = {};

  $scope.cadastrar = function() {

    // Converter formato da data: brazilian -> american.
    var data = moment(aluno.nascimento, "dd-mm-aaaa");
    alunoApi.cadastrar(aluno)
      .then(function(response) {})
      .catch(function(error) {});

        var toast = $mdToast.simple()
            .textContent('O aluno foi cadastrado com sucesso!')
            .position('left')
            .action('OK')
            .hideDelay(6000);
        $mdToast.show(toast);

      }
    }

app.controller('AlunoController', alunoController);
