/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlDeleteClient', function ($scope, serviceFactoryClient) {

    $scope.deleteClient = function (id) {

        var promise = serviceFactoryClient.deleteC(id);

        promise
            .then(
                function (data) {
                    $scope.client = data;
                    $scope.clientError = null;
                },
                function (data) {
                    $scope.client = null;
                    $scope.clientError = data;
                }
            );
    }
});