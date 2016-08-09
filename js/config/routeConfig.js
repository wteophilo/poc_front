angular.module("app").config(function($routeProvider){

  $routeProvider.when('/', {
     templateUrl : 'view/home.html',
     controller     : 'homecontroller',
  });

  $routeProvider.when('/agendar', {
     templateUrl : 'view/agenda.html',
     controller     : 'agendacontroller',
  });


    $routeProvider.when('/doador', {
       templateUrl : 'view/doador.html',
       controller     : 'doadorcontroller',
    });

  $routeProvider.otherwise ({ redirectTo: '/' });
 });
