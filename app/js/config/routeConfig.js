angular.module("app").config(function($routeProvider){

  $routeProvider.when('/', {
     templateUrl: 'view/home.html',
     controller: 'homecontroller',
  });


  $routeProvider.when('/doador', {
     templateUrl: 'view/doador/cadastro.html',
     controller: 'doadorcontroller',
  });

  $routeProvider.when('/agendar', {
     templateUrl: 'view/agenda/agendar.html',
     controller: 'agendacontroller',
  });


  $routeProvider.otherwise ({ redirectTo: '/' });
 });
