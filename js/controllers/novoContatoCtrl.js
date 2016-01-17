angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, contatosAPI, serialGenerator, operadoras){
  $scope.operadoras = operadoras.data;
  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    contato.id = 4;
    contatosAPI.saveContato(contato).success(function (data) {
      if (data) {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        $location.path("/contatos");
      }
    });
  }
});
