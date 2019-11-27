app.config(function ($routeProvider, $locationProvider) {

    // Remover a exclamação (!) da URL
    var SEM_PREFIXO = '';
    $locationProvider.hashPrefix(SEM_PREFIXO);

    // Utilizando o HTML5 History API
    //$locationProvider.html5Mode(true);

    // Atualizar os módulos passados no app.js adicionando o 'ui.router'.
    // Mover todas as rotas já definidas no router.js para o arquivo state.js.
    // Verificar o modelo utilizado para o $stateProvider presente no state.js que é diferente.
    // Não esquecer de importar no index o script state.js .
    // Mudar no index.html o atributo ng-view para o ui-view.
    $routeProvider
      .when('/', {
        templateUrl : 'Home.html',
        controller  : 'HomeController'
      })
      .when('/Aluno', {
        templateUrl : 'Aluno.html',
        controller  : 'AlunoController'
      })
      .when('/Campus', {
        templateUrl : 'Campus.html',
        controller  : 'CampusController'
      })
      .when('/Curso', {
        templateUrl : 'Curso.html',
        controller  : 'CursoController'
      })
      .when('/Disciplina', {
        templateUrl : 'Disciplina.html',
        controller  : 'DisciplinaController'
      })
      .when('/Endereco', {
        templateUrl : 'Endereco.html',
        controller  : 'EnderecoController'
      })
      .when('/Escola', {
        templateUrl : 'Escola.html',
        controller  : 'EscolaController'
      })
      .when('/Professor', {
        templateUrl : 'Professor.html',
        controller  : 'ProfessorController'
      })
      .when('/Turma', {
        templateUrl : 'Turma.html',
        controller  : 'TurmaController'
      })
      .when('/Turno', {
        templateUrl : 'Turno.html',
        controller  : 'TurnoController'
      })
    .otherwise({redirectTo: '/'});
});
