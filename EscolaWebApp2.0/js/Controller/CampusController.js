var campusController = function($scope, $mdToast, campusApi) {

  $scope.campus = {};

  $scope.cadastrar = function() {

    campusApi.cadastrar($scope.campus)
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

app.controller('CampusController', campusController);
