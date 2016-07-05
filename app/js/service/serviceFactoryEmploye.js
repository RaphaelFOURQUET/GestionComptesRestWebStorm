/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.factory('serviceFactoryEmploye', function ($http, $q, $log) {

    var addEmploye = function (employe) {
        var addEmployeUrl = "employe";

        var deferd = $q.defer();

        $http.post(serverUrl+addEmployeUrl, employe)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var getEmployes = function () {
        var getEmployesUrl = "employes";

        var deferd = $q.defer();

        $http.get(serverUrl+getEmployesUrl)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var addEmployeToGroupe = function (idGroupe, idEmploye) {
        var addEmployeToGroupeUrl = "employe/addToGroupe/";

        var deferd = $q.defer();

        $http.put(serverUrl+addEmployeToGroupeUrl+idGroupe+"/"+idEmploye)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var getEmployesGroupe = function (idGroupe) {
        var getEmployesGroupeUrl = "employe/getEmployesGroupe/";

        var deferd = $q.defer();

        $http.get(serverUrl+getEmployesGroupeUrl+idGroupe)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    return{
        addE : addEmploye,
        getEs : getEmployes,
        addEToG : addEmployeToGroupe,
        getEsG : getEmployesGroupe
    }

});