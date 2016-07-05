/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlRetirer', function ($scope, serviceFactoryOperation) {

    $scope.retirer = function (idCompte, idEmploye, montant) {

        var promise = serviceFactoryOperation.retire(idCompte, idEmploye, montant);

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