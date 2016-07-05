/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlAddGroupe', function ($scope, serviceFactoryGroupe) {

    $scope.addGroupe = function () {

        var groupe = {
            nomGroupe : $scope.nomGroupe
        };

        var promise = serviceFactoryGroupe.addG(groupe);

        promise
            .then(
                function (data) {
                    $scope.groupe = data;
                    $scope.groupeError = null;
                },
                function (data) {
                    $scope.groupe = null;
                    $scope.groupeError = data;
                }
            );
    }
});