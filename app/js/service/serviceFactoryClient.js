/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.factory('serviceFactoryClient', function ($http, $q, $log) {

    var getClients = function () {
        var getClientsUrl = "clients";

        var deferd = $q.defer();

        $http.get(serverUrl+getClientsUrl)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };
    
    var getClient = function (id) {
        var getClientUrl = "client/";

        var deferd = $q.defer();

        $http.get(serverUrl+getClientUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var addClient = function (client) {
        var addClientUrl = "client";

        var deferd = $q.defer();

        $http.post(serverUrl+addClientUrl, client)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var deleteClient = function (id) {
        var deleteClientUrl = "client/";

        var deferd = $q.defer();

        $http.delete(serverUrl+deleteClientUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var updateClient = function (id, client) {
        var updateClientUrl = "client/";

        var deferd = $q.defer();

        $http.put(serverUrl+updateClientUrl+id, client)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var getClientByMc = function (mc) {
        var getClientByMcUrl = "client/byMc/";

        var deferd = $q.defer();

        $http.get(serverUrl+getClientByMcUrl+mc)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    return{
        getCs : getClients,
        getC : getClient,
        addC : addClient,
        deleteC : deleteClient,
        updateC : updateClient,
        getCByMc : getClientByMc
    }

});