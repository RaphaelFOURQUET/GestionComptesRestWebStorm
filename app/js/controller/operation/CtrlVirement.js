/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlVirement', function ($scope, serviceFactoryOperation) {

    $scope.virer = function (idCompteD, idCompteC, idEmploye, montant) {

        var promise = serviceFactoryOperation.vire(idCompteD, idCompteC, idEmploye, montant);

        promise
            .then(
                function (data) {
                    $scope.success = true;
                },
                function (data) {
                    $scope.success = false;
                }
            );
    }
});