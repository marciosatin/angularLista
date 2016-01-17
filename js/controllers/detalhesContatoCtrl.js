angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato, serialGenerator){
    if (contato.data.length > 0) {
      $scope.contato = contato.data[0];
      $scope.contato.serial = serialGenerator.generate();
    }
});
