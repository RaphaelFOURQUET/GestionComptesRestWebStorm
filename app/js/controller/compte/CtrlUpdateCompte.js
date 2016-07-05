/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.controller('ctrlUpdateCompte', function ($scope, serviceFactoryCompte) {

    $scope.infos = function () {

        var promise = serviceFactoryCompte.getC($scope.idCompte);

        promise
            .then(
                function (data) {
                    console.log(data);
                    $scope.compte = data;
                    $scope.soldeCompte = data.soldeCompte;
                    $scope.idEmploye = data.employe.codeEmploye;
                },
                function (data) {
                    $scope.compteError = data;
                }
            );

    };

    $scope.updateCompte = function () {
        
        $scope.compte.soldeCompte = $scope.soldeCompte;
        $scope.compte.employe.codeEmploye = $scope.idEmploye;

        var promise = serviceFactoryCompte.updateC($scope.idCompte, $scope.compte);

        promise
            .then(
                function (data) {
                    $scope.compte = data;
                    $scope.compteError = null;
                },
                function (data) {
                    $scope.compte = null;
                    $scope.compteError = data;
                }
            )
    };

});