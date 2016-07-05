/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlGetClients', function ($scope, serviceFactoryClient) {
    
    var promise = serviceFactoryClient.getCs();

    promise
        .then(
            function (data) {
                $scope.clients = data;
                $scope.clientsError = null;
            },
            function (data) {
                $scope.clients = null;
                $scope.clientsError = data;
            }
        );
});