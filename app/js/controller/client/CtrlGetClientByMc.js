/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlGetClientByMc', function ($scope, serviceFactoryClient) {

    $scope.getClientByMc = function (mc) {

        var promise = serviceFactoryClient.getCByMc(mc);

        promise
            .then(
                function (data) {
                    $scope.clients = data;
                    $scope.clienstError = null;
                },
                function (data) {
                    $scope.clients = null;
                    $scope.clientsError = data;
                }
            );
    }
});