/**
 * Created by INTI-0332 on 01/07/2016.
 */

/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlGetComptesByEmploye', function ($scope, serviceFactoryCompte) {

    $scope.getComptesByEmploye = function (id) {

        var promise = serviceFactoryCompte.getCsByE(id);

        promise
            .then(
                function (data) {
                    $scope.comptes = data;
                    $scope.comptesError = null;
                },
                function (data) {
                    $scope.comptes = null;
                    $scope.comptesError = data;
                }
            );
    }
});