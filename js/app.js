var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider

  .when('/', {
     templateUrl : 'view/home.html',
     controller     : 'HomeController',
  })

  .when('/agendar', {
     templateUrl : 'view/agenda.html',
     controller     : 'AgendaController',
  })


  .otherwise ({ redirectTo: '/' });
});

app.controller('HomeController', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('AgendaController', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
