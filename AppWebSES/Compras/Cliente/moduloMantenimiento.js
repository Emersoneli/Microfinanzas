// Programa (Objeto)	:	Proyecto WEB RMG|Creación y Configuracion del modulo general
// Autor			    :	Emerson Ramos Malca
// Fecha			    : 	13-02-2017
// Descripción		    :	configuracion de ruteo de enlaces al momento de ser invocado por el webApi en el navegador de internet predeterminado
// ----------------------------------------------------------------------------------------------------------------------
// <Modificaciones>     : <#Requerimiento>| <Autor(Apellidos y Nombres)>| <Fecha(DD-MM-AAAA)>| <Motivo>
// ----------------------------------------------------------------------------------------------------------------------


var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

//configuracion de las rutas
angularRoutingApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Compras/Cliente/Pages/inicio.html',
            controller: 'mainController'
        })
        //definiendo la seccon para clientes
        .when('/juridica', {
            //registro nuevo
            templateUrl: 'Compras/Cliente/Pages/personaJuridica.html',
            controller: 'juricaController'
        })
        .when('/natural', {
            //busuqeda y actualizacion
            templateUrl: 'Compras/Cliente/Pages/personaNatural.html',
            controller: 'naturalController'
        })
        .otherwise({
            redirectTo: '/'
        });
});