/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlVerser', function ($scope, serviceFactoryOperation) {

    $scope.verser = function (idCompte, idEmploye, montant) {

        var promise = serviceFactoryOperation.verse(idCompte, idEmploye, montant);

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