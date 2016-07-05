/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlAddEmploye', function ($scope, serviceFactoryEmploye) {

    $scope.addEmploye = function () {

        var employe = {
            nomEmploye : $scope.nomEmploye
        };

        var promise = serviceFactoryEmploye.addE(employe);

        promise
            .then(
                function (data) {
                    $scope.employe = data;
                    $scope.employeError = null;
                },
                function (data) {
                    $scope.employe = null;
                    $scope.employeError = data;
                }
            );
    }
});