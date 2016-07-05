/**
 * Created by INTI-0332 on 29/06/2016.
 */

'use strict';

app.factory('serviceFactoryBanque', function ($http, $q, $log) {

    var getListComptes = function (id) {
        var getListComptesUrl = "banque/comptes/";

        var deferd = $q.defer();

        $http.get(serverUrl+getListComptesUrl+id)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;

    };

    var addBanque = function (banque) {
        var getListComptesUrl = "banque";

        var deferd = $q.defer();

        $http.post(serverUrl+getListComptesUrl, banque)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };

    var addBanqueToCompte = function (idCompte, idBanque) {
        var addBanqueToCompteUrl = "banque/addToCompte/";

        var deferd = $q.defer();

        $http.put(serverUrl+addBanqueToCompteUrl+idCompte+"/"+idBanque)
            .success(function (data) {
                deferd.resolve(data);
            })
            .error(function (data) {
                deferd.reject(data);
            });

        return deferd.promise;
    };
    
    
    return{
        getLC : getListComptes,
        addB : addBanque,
        addBToC : addBanqueToCompte
    }
    
});