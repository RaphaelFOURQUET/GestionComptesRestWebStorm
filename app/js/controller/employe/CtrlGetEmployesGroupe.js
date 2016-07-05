/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlGetEmployesGroupe', function ($scope, serviceFactoryEmploye) {

    $scope.getEmployesGroupe = function (idGroupe) {

        var promise = serviceFactoryEmploye.getEsG(idGroupe);

        promise
            .then(
                function (data) {
                    $scope.employes = data;
                    $scope.employesError = null;
                },
                function (data) {
                    $scope.employes = null;
                    $scope.employesError = data;
                }
            );
    }
});