/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlAddCompte', function ($scope, serviceFactoryCompte) {

    $scope.addCompte = function (idClient, idEmploye) {

        var compte = {
            soldeCompte : $scope.soldeCompte,
            dateDeCreation : Date.now(),
            operations : [],
            banques : []
        };

        var promise = serviceFactoryCompte.addC(compte, idClient, idEmploye);

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