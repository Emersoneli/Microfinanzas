// Programa (Objeto)	:	Proyecto WEB SES|Creación y Configuracion del modulo general
// Autor			    :	Fred Torres Torres
// Fecha			    : 	15-02-2016
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
            controller  : 'mainController'
        })
        //definiendo la seccon para clientes
        .when('/cliente', {
            //registro nuevo
            templateUrl: 'Compras/Cliente/Pages/clienteRegistro.html',
            controller  : 'clienteController'
        })
        .when('/cliente/:id', {
            //busuqeda y actualizacion
            templateUrl: 'Compras/Cliente/Pages/clienteRegistro.html',
            controller: 'clienteController'
        })
        .when('/listado', {
            //listado general
            templateUrl: 'Compras/Cliente/Pages/clientesMantenimiento.html',
            controller  : 'listadoController'
        })
        .when('/reporte', {
            //listado general
            templateUrl: 'Compras/Cliente/Pages/clientesReporte.html',
            controller: 'reporteController'
        })
        .when('/consulta', {
            //Consulta C.R
            templateUrl: 'Compras/Cliente/Pages/consultaCR.html',
            controller: 'consultaController'
        })
        .when('/crearsoli', {
            //Crear Solicitud
            templateUrl: 'Compras/Cliente/Pages/crearSolicitud.html',
            controller: 'crearsoliController'
        })
        .when('/asociarP', {
            //Asociar Persona
            templateUrl: 'Compras/Cliente/Pages/asociarPersonas.html',
            controller: 'crearsoliController'
        })
         //definiendo la seccon para clientes
        .when('/persona', {
            //registro nuevo
            templateUrl: 'Compras/Cliente/Pages/personaMantenimiento.html',
            controller: 'juricaController'
        })
        .when('/juridica', {
            //registro nuevo
            templateUrl: 'Compras/Cliente/Pages/juridicaRegistro.html',
            controller: 'juricaController'
        })
        .when('/natural', {
            //busuqeda y actualizacion
            templateUrl: 'Compras/Cliente/Pages/personaNatural.html',
            controller: 'naturalController'
        })

        /*//aqui puedes definir otras secciones antes del otherwise. Ejemplo:
        .when('/<<nuevo llamado>>', {
            templateUrl: 'ruta del template html a usarce',
            controller: 'nombre del controlador definido en el controlador de la nueva seccion'
        })
        */
        .otherwise({
            redirectTo  : '/'
        });

        var app = angular.module('miAplicacion', [])
        app.controller('fechaController', function ($scope) {
            $scope.CurrentDate = new Date();
        });
});