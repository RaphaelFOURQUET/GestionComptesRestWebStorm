/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlUpdateClient', function ($scope, serviceFactoryClient) {

    $scope.infos = function () {

        var promise = serviceFactoryClient.getC($scope.idClient);

        promise
            .then(
                function (data) {
                    console.log(data);
                    $scope.client = data;
                    $scope.nomClient = data.nomClient;
                    $scope.prenomClient = data.prenomClient;
                    $scope.DateNaissClient = new Date(data.dateDeNaissance);
                    $scope.adresseClient = data.addrPosta;
                },
                function (data) {
                    $scope.clientError = data;
                }
            );

    };

    $scope.updateClient = function () {

        $scope.client = {
            idClient : $scope.idClient,
            nomClient : $scope.nomClient,
            prenomClient : $scope.prenomClient,
            dateDeNaissance :  $scope.DateNaissClient,
            addrPosta : $scope.adresseClient

        };

        var promise = serviceFactoryClient.updateC($scope.idClient, $scope.client);

        promise
            .then(
                function (data) {
                    $scope.client = data;
                    $scope.clientError = null;
                },
                function (data) {
                    $scope.client = null;
                    $scope.clientError = data;
                }
            )
    };

});