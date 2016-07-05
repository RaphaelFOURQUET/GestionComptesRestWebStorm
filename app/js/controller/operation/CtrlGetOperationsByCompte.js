/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlGetOperationsByCompte', function ($scope, serviceFactoryOperation) {

    $scope.getOperationsByCompte = function (idCompte) {

        var promise = serviceFactoryOperation.getOsByC(idCompte);

        promise
            .then(
                function (data) {
                    $scope.operations = data;
                    $scope.operationsError = null;
                },
                function (data) {
                    $scope.operations = null;
                    $scope.operationsError = data;
                }
            );
    }
});