/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlGetListeComptes', function ($scope, serviceFactoryBanque) {

    $scope.getListeComptes = function (id) {

        var promise = serviceFactoryBanque.getLC(id);

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
            )
    }
});