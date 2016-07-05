/**
 * Created by INTI-0332 on 28/06/2016.
 */

'use strict';

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'src/views/home.html'
        })
        .when('/notImplementedYet', {
            templateUrl:'src/views/include/notImplementedYet.html'
        })
        /* ========== BANQUE ========== */
        .when('/getListeComptes', {
            templateUrl:'src/views/banque/getListeComptes.html',
            controller:'ctrlGetListeComptes'
        })
        .when('/addBanque', {
            templateUrl:'src/views/banque/addBanque.html',
            controller:'ctrlAddBanque'
        })
        .when('/addBanqueToCompte', {
            templateUrl:'src/views/banque/addBanqueToCompte.html',
            controller:'ctrlAddBanqueToCompte'
        })
        /* ========== CLIENTS ========== */
        .when('/getClients', {
            templateUrl:'src/views/client/getClients.html',
            controller:'ctrlGetClients'
        })
        .when('/getClient', {
            templateUrl:'src/views/client/getClient.html',
            controller:'ctrlGetClient'
        })
        .when('/addClient', {
            templateUrl:'src/views/client/addClient.html',
            controller:'ctrlAddClient'
        })
        .when('/deleteClient', {
            templateUrl:'src/views/client/deleteClient.html',
            controller:'ctrlDeleteClient'
        })
        .when('/updateClient', {
            templateUrl:'src/views/client/updateClient.html',
            controller:'ctrlUpdateClient'
        })
        .when('/getClientByMc', {
            templateUrl:'src/views/client/getClientByMc.html',
            controller:'ctrlGetClientByMc'
        })
        /* ========== EMPLOYE ========== */
        .when('/addEmploye', {
            templateUrl:'src/views/employe/addEmploye.html',
            controller:'ctrlAddEmploye'
        })
        .when('/getEmployes', {
            templateUrl:'src/views/employe/getEmployes.html',
            controller:'ctrlGetEmployes'
        })
        .when('/addEmployeToGroupe', {
            templateUrl:'src/views/employe/addEmployeToGroupe.html',
            controller:'ctrlAddEmployeToGroupe'
        })
        .when('/getEmployesGroupe', {
            templateUrl:'src/views/employe/getEmployesGroupe.html',
            controller:'ctrlGetEmployesGroupe'
        })
        /* ========== GROUPES ========== */
        .when('/getGroupes', {
            templateUrl:'src/views/groupe/getGroupes.html',
            controller:'ctrlGetGroupes'
        })
        .when('/addGroupe', {
            templateUrl:'src/views/groupe/addGroupe.html',
            controller:'ctrlAddGroupe'
        })
        /* ========== COMPTES ========== */
        .when('/addCompte', {
            templateUrl:'src/views/compte/addCompte.html',
            controller:'ctrlAddCompte'
        })
        .when('/deleteCompte', {
            templateUrl:'src/views/compte/deleteCompte.html',
            controller:'ctrlDeleteCompte'
        })
        .when('/getCompte', {
            templateUrl:'src/views/compte/getCompte.html',
            controller:'ctrlGetCompte'
        })
        .when('/updateCompte', {
            templateUrl:'src/views/compte/updateCompte.html',
            controller:'ctrlUpdateCompte'
        })
        .when('/getComptesByClient', {
            templateUrl:'src/views/compte/getComptesByClient.html',
            controller:'ctrlGetComptesByClient'
        })
        .when('/getComptesByEmploye', {
            templateUrl:'src/views/compte/getComptesByEmploye.html',
            controller:'ctrlGetComptesByEmploye'
        })
        /* ========== OPERATIONS ========== */
        .when('/verser', {
            templateUrl:'src/views/operation/verser.html',
            controller:'ctrlVerser'
        })
        .when('/retirer', {
            templateUrl:'src/views/operation/retirer.html',
            controller:'ctrlRetirer'
        })
        .when('/virement', {
            templateUrl:'src/views/operation/virement.html',
            controller:'ctrlVirement'
        })
        .when('/getOperationsByCompte', {
            templateUrl:'src/views/operation/getOperationsByCompte.html',
            controller:'ctrlGetOperationsByCompte'
        })
        .otherwise({
            redirectTo:'/'
        })
});