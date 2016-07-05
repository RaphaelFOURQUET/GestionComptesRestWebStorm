/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlAddEmployeToGroupe', function ($scope, serviceFactoryEmploye) {

    $scope.addEmployeToGroupe = function (idGroupe, idEmploye) {

        var promise = serviceFactoryEmploye.addEToG(idGroupe, idEmploye);

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