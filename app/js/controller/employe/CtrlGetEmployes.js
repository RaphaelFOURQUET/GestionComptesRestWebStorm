/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlGetEmployes', function ($scope, serviceFactoryEmploye) {

    var promise = serviceFactoryEmploye.getEs();

    promise
        .then(
            function (data) {
                $scope.employes = data;
                $scope.employesError = null;
            },
            function (data) {
                $scope.employes = null;
                $scope.employesError = data;
            }
        );
});