/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlAddClient', function ($scope, serviceFactoryClient) {

    $scope.addClient = function () {

        var client = {
            nomClient : $scope.nomClient,
            prenomClient : $scope.prenomClient,
            dateDeNaissance : $scope.DateNaissClient,
            addrPosta : $scope.adresseClient
        };

        var promise = serviceFactoryClient.addC(client);

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
            );
    }
});