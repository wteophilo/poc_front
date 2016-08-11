angular.module('app').controller('doadorcontroller',function($rootScope, $location,$scope,$http){
   $rootScope.activetab = $location.path();
   $scope.doadores=[];

/*   var carregaDoadores = function(){
     $http.get('http://localhost:8080/doador/lista').sucess(function(data){
        $scope.doadores = data});
    };

    $scope.adicionaDoador = function(doador){
      $http.post("http://localhost:8080/doador/").sucess(function(data){
        $scope.formDoador.setPristine()});
    };*/
});
