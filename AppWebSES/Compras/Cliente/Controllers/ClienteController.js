// Programa (Objeto)	:	Proyecto WEB SES|Configuracion del Controlador Cliente
// Autor			    :	Fred Torres Torres
// Fecha			    : 	15-02-2016
// Descripción		    :	Creacion de eventos de busqueda, actualización y registro de la entidad cliente mediante el WebApi
// ----------------------------------------------------------------------------------------------------------------------
// <Modificaciones>     : <#Requerimiento>| <Autor(Apellidos y Nombres)>| <Fecha(DD-MM-AAAA)>| <Motivo>
// ----------------------------------------------------------------------------------------------------------------------

//invocando al modulo y creando el controler definido para clientes
angularRoutingApp.controller('clienteController', function ($scope, $http, $location, $routeParams) {
    $scope.message = "";
    $scope.codigo_oculto = "";
    $scope.nombres = "";
    $scope.apellidos = "";
    $scope.sexo = "";
    $scope.direccion = "";

    if ($location.path().indexOf("/cliente") == 0) {
        var id = $routeParams["id"];
        cargarDatos(id);
    }
   
    $scope.btnAceptar = function () {
        if ($scope.codigo_oculto == '') {
            procesarDatos();
        } else {
            actualizarDatos($scope.codigo_oculto);
        }
    }

    $scope.btnCancelar = function () {
        $scope.nombres = "";
        $scope.apellidos = "";
        $scope.hombre = false;
        $scope.mujer = false;
        $scope.direccion = "";
        $scope.message = "";
    }

    function actualizarDatos(codigoId) {
        $scope.message = "";

        var par1 = 'F';
        if ($scope.hombre == true) {
            par1 = 'M';
        }

        var oModelo = ModeloCliente(codigoId, $scope.nombres, $scope.apellidos, par1, $scope.direccion);

        $http({
            method: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: _URLApiBase + 'Cliente',
            data: $.param(oModelo),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).success(function (response) {
            $scope.message = 'Se Actualizo el registro';
            $scope.path("/listado");
        }).error(function (error) {
            $scope.message = 'No se pudo Actualizar el registro: ' + error.message;
        });
    }
    
    function cargarDatos(varId) {
        $scope.message = "";
        if (!varId) {
            $scope.codigo_oculto = "";
            $scope.nombres = "";
            $scope.apellidos = "";
            $scope.sexo = "";
            $scope.direccion = "";

        } else {
            var UrlApi = _URLApiBase + 'Cliente' + '/' + varId  + '/A/0/0/';
            $http.get(UrlApi).success(function (response) {

                $scope.codigo_oculto = varId;
                $scope.nombres = response[0]['Nombre'];
                $scope.apellidos = response[0]['Apellido'];
                $scope.direccion = response[0]['Direccion'];

                if (response[0]['Sexo'] == 'F') {
                    $scope.mujer = true;
                } else {
                    $scope.hombre = true;
                }
            })
            .error(function (error) {
               // $scope.message = 'No se pudo cargar la data: ' + error.message;
            });
        }
    }

    function procesarDatos() {
        $scope.message = "";

        var par1 = 'F';
        if ($scope.hombre == true) {
            par1 = 'M';
        }

        var oModelo = ModeloCliente('0', $scope.nombres, $scope.apellidos, par1, $scope.direccion);

        $http({
            method: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: _URLApiBase + 'Cliente',
            data: $.param(oModelo),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).success(function (response) {
            $scope.message = 'Se Registro cliente ' + $scope.nombres + ' ' + $scope.apellidos;
        }).error(function (error) {
            $scope.message = 'No se pudo Crear el registro: ' + error.message;
        });
    }
});