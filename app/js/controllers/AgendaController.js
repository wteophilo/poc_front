angular.module('app').controller('agendacontroller',function($scope,$http,$rootScope, $location){
   $rootScope.activetab = $location.path();
   $scope.listaAgenda=[];
   $scope.laboratorios = [];

   var carregaLaboratorio = function(lab){
     $http.get('http://localhost:8081/laboratorio/{cidade}').success(function(data){
        $scope.laboratorios = data;
     }).error(function (data, status) {
       $scope.message = "Não foi possivel conectar ao servidor tente mais tarde " + data;
     });
    };

    $scope.adicionarAgendar = function(agenda){
      $http.post("http://localhost:8080/agenda/",agenda).success(function(data){
        $scope.formAgenda.setPristine();
        $scope.message = "Agenda realizada com sucesso";
        delete $scope.agenda;
      }).error(function(data,status){
        $scope.message = "Ocorreu um problema ao criar o doador "+ data;
      });
    };

});
