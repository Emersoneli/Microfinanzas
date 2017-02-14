// Programa (Objeto)	:	Proyecto WEB SES|Configuracion del Controlador listado
// Autor			    :	Fred Torres Torres
// Fecha			    : 	15-02-2016
// Descripción		    :	Creacion de eventos de listado, busqueda por codigo, busuqeda por nombre y eliminar de la entidad cliente mediante el WebApi
// ----------------------------------------------------------------------------------------------------------------------
// <Modificaciones>     : <#Requerimiento>| <Autor(Apellidos y Nombres)>| <Fecha(DD-MM-AAAA)>| <Motivo>
// ----------------------------------------------------------------------------------------------------------------------

//invocando al modulo y creando el controler definido para listados
angularRoutingApp.controller('reporteController', function ($scope, $http) {
    $scope.message = "";
    $scope.PageNumber = 1;
    $scope.PageNumber2 = "...";
    $scope.nroFilasxPag = 8;
    $scope.class1 = "";
    $scope.class2 = "";
    $scope.class3 = "visible";

    cargarDatos($scope.PageNumber, $scope.nroFilasxPag);

    $scope.btnBuscarId = function () {
        if (!$scope.codigo) {
            //cargarDatos($scope.PageNumber, $scope.nroFilasxPag);
            $scope.message2 = "Falta ingresar codigo para la busqueda";
        } else {
            cargarDatosById($scope.codigo, $scope.PageNumber, $scope.nroFilasxPag);
        }
    }

    $scope.btnBuscarStr = function () {
        if (!$scope.nombre) {
            //cargarDatos($scope.PageNumber, $scope.nroFilasxPag);
            $scope.message2 = "Falta ingresar nombres para la busqueda";
        } else {
            cargarDatosByStr($scope.nombre, $scope.PageNumber, $scope.nroFilasxPag);
            $scope.message2 = "";
        }
    }

    $scope.btnGoBack = function () {
        $scope.message2 = "";
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

    $scope.mModal = function () {
        //$scope.message = "Estas Seguro de Eliminar el registro seleccionado?";
        $scope.message = "Falta ingresar datos en el formulario, verifique...";
    }

   

    function cargarDatos(pagina, filaspagina) {
        $scope.class1 = "disabled";
        var UrlApi = _URLApiBase + 'Cliente' + '/0/' + '/' + 'A' + '/' + pagina + '/' + filaspagina + '/';

        $http.get(UrlApi).success(function (response) {          
            //cuento la cantidad de registros devueltos
            if (response.length == 0) {
                $scope.class2 = "disabled";
                $scope.class3 = "invisible";
                $scope.PageNumber = $scope.PageNumber - 1
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

    
    $scope.exportDataXls = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type:"application/vnd.openxmlformats-officedocument.spreadsheet;charset=utf-8"
        });
        saveAs(blob, "Reporte.xls");
    }
   
    $scope.exportDataPdf = function () {
        $('#exportable').tableExport({ tableName: 'exportable', type: 'pdf', escape: 'true' });
    }

});