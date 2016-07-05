/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlAddBanque', function ($scope, serviceFactoryBanque) {

    $scope.addBanque = function () {

        var banque = {
            nomAgence : $scope.nomBanque,
            adrrAgence : $scope.adresseBanque,
            codePostale : $scope.codePostalBanque
        };

        var promise = serviceFactoryBanque.addB(banque);

        promise
            .then(
                function (data) {
                    $scope.banque = data;
                    $scope.banqueError = null;
                },
                function (data) {
                    $scope.banque = null;
                    $scope.banqueError = data;
                }
            )
    }
});