/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.controller('ctrlGetGroupes', function ($scope, serviceFactoryGroupe) {

    var promise = serviceFactoryGroupe.getGs();

    promise
        .then(
            function (data) {
                $scope.groupes = data;
                $scope.groupesError = null;
            },
            function (data) {
                $scope.groupes = null;
                $scope.groupesError = data;
            }
        );
});