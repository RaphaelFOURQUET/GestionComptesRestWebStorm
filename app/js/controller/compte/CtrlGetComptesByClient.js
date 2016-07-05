/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlGetComptesByClient', function ($scope, serviceFactoryCompte) {

    $scope.getComptesByClient = function (id) {

        var promise = serviceFactoryCompte.getCsByC(id);

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