/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.factory('serviceFactoryOperation', function ($http, $q, $log) {


    var verser = function (idCompte, idEmploye, montant) {
        var verserUrl = "operation/verser/";

        var deferd = $q.defer();

        $http.post(serverUrl+verserUrl+idCompte+"/"+idEmploye+"/"+montant, null)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var retirer = function (idCompte, idEmploye, montant) {
        var retirerUrl = "operation/retirer/";

        var deferd = $q.defer();

        $http.post(serverUrl+retirerUrl+idCompte+"/"+idEmploye+"/"+montant, null)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var virer = function (idCompteD, idCompteC, idEmploye, montant) {
        var virerUrl = "operation/virer/";

        var deferd = $q.defer();

        $http.post(serverUrl+virerUrl+idCompteD+"/"+idCompteC+"/"+idEmploye+"/"+montant, null)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var getOperationsByCompte = function (id) {
        var getOperationsByCompteUrl = "operation/byCompte/";

        var deferd = $q.defer();

        $http.get(serverUrl+getOperationsByCompteUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    return {
        verse : verser,
        retire : retirer,
        vire : virer,
        getOsByC : getOperationsByCompte
    }

});