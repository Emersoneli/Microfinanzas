// Programa (Objeto)	:	Proyecto WEB SES|Variables globales
// Autor			    :	Fred Torres Torres
// Fecha			    : 	15-02-2016
// Descripción		    :	Creacion de variables para ser usadas en todo el proyecto web
// ----------------------------------------------------------------------------------------------------------------------
// <Modificaciones>     : <#Requerimiento>| <Autor(Apellidos y Nombres)>| <Fecha(DD-MM-AAAA)>| <Motivo>
// ----------------------------------------------------------------------------------------------------------------------

var _URLApiBase = 'http://localhost:3369/';



//Estructura de un llamado Get al webApi
/*
*$http.get(<UrlApi>).success(function (response) {
*    //aquí va el código
*})
*.error(function (error) {
*   //aquí va el código
*})
*/

//Estructura de un llamado Post al webApi
/*
*$http({
*    method: 'POST',
*    contentType: 'application/json; charset=utf-8',
*    url: _<UrlApi> + <nombre del controller>,
*    data: $.param(<objeto tipo arreglo donde iran los parametros>),
*    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
*}).success(function (response) {
*    //aquí va el código
*}).error(function (error) {
*    //aquí va el código
*});
*/

//Estructura de un llamado Put al webApi
/*
*$http({
*    method: 'PUT',
*    contentType: 'application/json; charset=utf-8',
*    url: _<UrlApi> + <nombre del controller>,
*    data: $.param(<objeto tipo arreglo donde iran los parametros>),
*    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
*}).success(function (response) {
*    //aquí va el código
*}).error(function (error) {
*    //aquí va el código
*});
*/

//Estructura de un llamado Delete al webApi
/*
*$http({
*    method: 'DELETE',
*    contentType: 'application/json; charset=utf-8',
*    url: _<UrlApi> + <nombre del controller>,
*    data: $.param(<objeto tipo arreglo donde iran los parametros>),
*    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
*}).success(function (response) {
*    //aquí va el código
*}).error(function (error) {
*    //aquí va el código
*});
*/
