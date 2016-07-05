/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlDeleteCompte', function ($scope, serviceFactoryCompte) {

    $scope.deleteCompte = function (id) {

        var promise = serviceFactoryCompte.deleteC(id);

        promise
            .then(
                function (data) {
                    $scope.compte = data;
                    $scope.compteError = null;
                },
                function (data) {
                    $scope.compte = null;
                    $scope.compteError = data;
                }
            );
    }
});