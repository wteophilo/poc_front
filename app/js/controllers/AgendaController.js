angular.module('app').controller('agendacontroller', function($rootScope, $location,$scope){
   $rootScope.activetab = $location.path();
   $scope.listaAgenda=[];
});
