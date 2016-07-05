/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlGetClient', function ($scope, serviceFactoryClient) {

    $scope.getClient = function (id) {
        
        var promise = serviceFactoryClient.getC(id);

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