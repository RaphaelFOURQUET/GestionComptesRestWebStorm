/**
 * Created by INTI-0332 on 30/06/2016.
 */

'use strict';

app.factory('serviceFactoryGroupe', function ($http, $q, $log) {
    

    var getGroupes = function () {
        var getGroupesUrl = "groupes";

        var deferd = $q.defer();

        $http.get(serverUrl+getGroupesUrl)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var addGroupe = function (groupe) {
        var addGroupeUrl = "groupe";

        var deferd = $q.defer();

        $http.post(serverUrl+addGroupeUrl, groupe)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    return{
        getGs : getGroupes,
        addG : addGroupe
    }

});