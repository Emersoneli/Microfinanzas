// Programa (Objeto)	:	Proyecto WEB SES|Configuracion del Controlador listado
// Autor			    :	Fred Torres Torres
// Fecha			    : 	15-02-2016
// Descripción		    :	Creacion de eventos de listado, busqueda por codigo, busuqeda por nombre y eliminar de la entidad cliente mediante el WebApi
// ----------------------------------------------------------------------------------------------------------------------
// <Modificaciones>     : <#Requerimiento>| <Autor(Apellidos y Nombres)>| <Fecha(DD-MM-AAAA)>| <Motivo>
// ----------------------------------------------------------------------------------------------------------------------

//invocando al modulo y creando el controler definido para listados
angularRoutingApp.controller('listadoController', function ($scope, $http) {
    $scope.message = "";
    $scope.PageNumber = 1;
    $scope.PageNumber2 = "...";
    $scope.nroFilasxPag = 9;
    $scope.class1 = "";

    cargarDatos($scope.PageNumber, $scope.nroFilasxPag);

    $scope.btnBuscar = function () {
        $scope.message = '';
        if (!$scope.codigo) {
            if (!$scope.nombre) {
                cargarDatos($scope.PageNumber, $scope.nroFilasxPag);
            } else {
                cargarDatosByStr($scope.nombre, $scope.PageNumber, $scope.nroFilasxPag);
            }
        } else {
            if (!$scope.nombre) {
                cargarDatosById($scope.codigo, $scope.PageNumber, $scope.nroFilasxPag);
            } else {
                cargarDatos($scope.PageNumber, $scope.nroFilasxPag);
            }
        }
    }
    
    $scope.btnEliminar = function (oObjeto, indx) {
        if (confirm("Seguro de eliminar este registro?")) {
            eliminarDatosById(oObjeto);
        }
    }

    $scope.btnNuevo = function () {
        $scope.path("/cliente");
    }

    $scope.btnGoBack = function () {
        $scope.PageNumber = $scope.PageNumber - 1;
        if ($scope.PageNumber < 1) {
            $scope.PageNumber = 1;
            $scope.class1 = "disabled";
        } else {
            $scope.class1 = "";
        }
        $scope.message = "";
        cargarDatos($scope.PageNumber, $scope.nroFilasxPag);

    }

    $scope.btnGoNext = function () {
        $scope.message = "";
        $scope.PageNumber = $scope.PageNumber + 1;
        cargarDatos($scope.PageNumber, $scope.nroFilasxPag);
        $scope.class1 = "";
    }

    function cargarDatos(pagina, filaspagina) {
        $scope.class1 = "disabled";
        var UrlApi = _URLApiBase + 'Cliente' + '/0/' + '/' + 'A' + '/' + pagina + '/' + filaspagina + '/';

        $http.get(UrlApi).success(function (response) {          
            //cuento la cantidad de registros devueltos
            if (response.length == 0) {
                $scope.class2 = "disabled";
                $scope.class3 = "invisible";
                $scope.PageNumber = $scope.PageNumber - 1;
                if ($scope.PageNumber <= 0) {
                    $scope.PageNumber = 1;
                }
            } else {
                $scope.lstClientes = response;
                $scope.class2 = "";
                $scope.class3 = "visible";
            }
        })
        .error(function (error) {
            //$scope.message = 'No se pudo cargar la data: ' + error.message;
        });
    }

    function cargarDatosById(codigo_cliente, paginaActual, nroFilasPorPagina) {
        var UrlApi = _URLApiBase + 'Cliente' + '/' + codigo_cliente + '/' + 'A' + '/' + paginaActual + '/' + nroFilasPorPagina + '/';

        $http.get(UrlApi).success(function (response) {
            $scope.lstClientes = response;
        })
        .error(function (error) {
            $scope.message = 'No Se pudo cargar la data: ' + error.message;
        });
    }

    function cargarDatosByStr(nombre_cliente, paginaActual, nroFilasPorPagina) {
        var UrlApi = _URLApiBase + 'Cliente' + '/0/' + nombre_cliente + '/' + paginaActual + '/' + nroFilasPorPagina + '/';
        
        $http.get(UrlApi).success(function (response) {
            $scope.lstClientes = response;
        })
        .error(function (error) {
            $scope.message = 'No se pudo cargar la data: ' + error.message;
        });
    }

    function eliminarDatosById(objeto_cliente) {
        $scope.message = "";

        var oModelo = ModeloCliente(objeto_cliente.Id,'0','0','0','0');

        $http({
            method: 'DELETE',
            contentType: 'application/json; charset=utf-8',
            url: _URLApiBase + 'Cliente',
            data: $.param(oModelo),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).success(function (response) {
            $scope.message = 'Se Eliminó el registro :' + objeto_cliente.Nombre + ' ' + objeto_cliente.Apellido;
            cargarDatos($scope.PageNumber, $scope.nroFilasxPag);
        }).error(function (error) {
            $scope.message = 'No se pudo Eliminar el registro: ' + error.message;
        });
    }
});