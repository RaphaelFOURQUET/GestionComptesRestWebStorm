/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlAddBanqueToCompte', function ($scope, serviceFactoryBanque) {

    $scope.addBanqueToCompte = function (idCompte, idBanque) {
        

        var promise = serviceFactoryBanque.addBToC(idCompte, idBanque);

        promise
            .then(
                function (data) {
                    $scope.success = true;
                },
                function (data) {
                    $scope.success = false;
                }
            )
    }
});