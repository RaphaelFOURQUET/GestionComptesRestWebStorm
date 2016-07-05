/**
 * Created by INTI-0332 on 01/07/2016.
 */

'use strict';

app.factory('serviceFactoryCompte', function ($http, $q, $log) {

    var addCompte = function (compte, idClient, idEmploye) {
        var addCompteUrl = "compte/";

        var deferd = $q.defer();

        $http.post(serverUrl+addCompteUrl+idClient+"/"+idEmploye, compte)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var deleteCompte = function (id) {
        var deleteCompteUrl = "compte/";

        var deferd = $q.defer();

        $http.delete(serverUrl+deleteCompteUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var getCompte = function (id) {
        var getCompteUrl = "compte/";

        var deferd = $q.defer();

        $http.get(serverUrl+getCompteUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var updateCompte = function (id, compte) {
        var updateCompteUrl = "compte/";

        var deferd = $q.defer();

        $http.put(serverUrl+updateCompteUrl+id, compte)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var getComptesByClient = function (id) {
        var getComptesByClientUrl = "compte/byClient/";

        var deferd = $q.defer();

        $http.get(serverUrl+getComptesByClientUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var getComptesByEmploye = function (id) {
        var getComptesByEmployeUrl = "compte/byEmploye/";

        var deferd = $q.defer();

        $http.get(serverUrl+getComptesByEmployeUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };
    

    return{
        addC : addCompte,
        deleteC : deleteCompte,
        getC : getCompte,
        updateC : updateCompte,
        getCsByC : getComptesByClient,
        getCsByE : getComptesByEmploye
    }

});