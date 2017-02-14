// Programa (Objeto)	:	Proyecto SES|Modulo de cliente
// Autor			    :	Fred Torres Torres
// Fecha			    : 	15-02-2016
// Descripción		    :	Creacion de metodos para busqueda, listados, registro, eliminacion y actualizacion del cliente.
// ----------------------------------------------------------------------------------------------------------------------
// <Modificaciones>     : <#Requerimiento>| <Autor(Apellidos y Nombres)>| <Fecha(DD-MM-AAAA)>| <Motivo>
// ----------------------------------------------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using FrameworkSES.dsSESTableAdapters;
using FrameworkSES.Entitys;
using FrameworkSES;

namespace FrameworkSES.Modules
{
    public class ModuleCliente
    {
        #region Campos
            private static DBC_ClientesTableAdapter  adaptador = new DBC_ClientesTableAdapter(); //creacion de la variable tipo TableAdapter para la tabla clientes
        #endregion 

        #region Metodos
            /// <summary>
            /// Busqueda parametricada de la tabla clientes
            /// </summary>
            /// <param name = "id">Código del cliente a buscar<param>
            /// <param name = "par1">Número de página a visualizar<param>
            /// <param name = "par2">Total de filas vista por pagina<param>
            /// <returns>devuelve una lista con los clientes que coincidan con el codigo indicado</returns>
            public static List<EntityCliente> GetClientesById(int id, int par1, int par2)
            {
                List<EntityCliente> ListClientes = new List<EntityCliente>();
                EntityCliente EntidadCliente;

                try
                {
                    DataTable tableClientes = adaptador.GetClienteById2(id, par1, par2);

                    for (int i = 0; i < tableClientes.Rows.Count; i++)
                    {
                        EntidadCliente = new EntityCliente();
                        EntidadCliente.Id = tableClientes.Rows[i]["CliId"].ToString();
                        EntidadCliente.Nombre = tableClientes.Rows[i]["CliNom"].ToString();
                        EntidadCliente.Apellido = tableClientes.Rows[i]["CliApe"].ToString();
                        EntidadCliente.Sexo = tableClientes.Rows[i]["CliSex"].ToString();
                        EntidadCliente.Direccion = tableClientes.Rows[i]["CliDir"].ToString();
                        ListClientes.Add(EntidadCliente);
                    }
                }
                catch (Exception)
                {
                    
                }                

                return ListClientes;
            }
                        
            /// <summary>
            /// Busqueda parametricada (nombre, pag a visualizar,total filas vista por pagina) de la tabla clientes
            /// </summary>
            /// <param name = "name">nombre o letras del cliente a buscar<param>
            /// <param name = "par1">Número de página a visualizar<param>
            /// <param name = "par2">Total de filas vista por pagina<param>
            /// <returns>devuelve una lista con los cliente que coincidan con el nombre o letras indicado</returns>
            public static List<EntityCliente> GetClientesByName(String name, int par1, int par2)
            {
                List<EntityCliente> ListClientes = new List<EntityCliente>();
                EntityCliente EntidadCliente;

                try
                {
                    DataTable tableClientes = adaptador.GetClienteByName(name, par1, par2);

                    for (int i = 0; i < tableClientes.Rows.Count; i++)
                    {
                        EntidadCliente = new EntityCliente();
                        EntidadCliente.Id = tableClientes.Rows[i]["CliId"].ToString();
                        EntidadCliente.Nombre = tableClientes.Rows[i]["CliNom"].ToString();
                        EntidadCliente.Apellido = tableClientes.Rows[i]["CliApe"].ToString();
                        EntidadCliente.Sexo = tableClientes.Rows[i]["CliSex"].ToString();
                        EntidadCliente.Direccion = tableClientes.Rows[i]["CliDir"].ToString();
                        ListClientes.Add(EntidadCliente);
                    }
                }
                catch (Exception)
                {
                   
                } 

                return ListClientes;
            }

            /// <summary>
            /// Listado general de la tabla clientes
            /// </summary>
            /// <returns>devuelve una lista con todos los clientes</returns>
            public static List<EntityCliente> GetClientes()
            {
                List<EntityCliente> ListClientes = new List<EntityCliente>();
                EntityCliente EntidadCliente;

                try
                {
                    DataTable tableClientes = adaptador.GetData();
                    
                    for (int i = 0; i < tableClientes.Rows.Count; i++)
                    {
                        EntidadCliente = new EntityCliente();
                        EntidadCliente.Id = tableClientes.Rows[i]["CliId"].ToString();
                        EntidadCliente.Nombre = tableClientes.Rows[i]["CliNom"].ToString();
                        EntidadCliente.Apellido = tableClientes.Rows[i]["CliApe"].ToString();
                        EntidadCliente.Sexo = tableClientes.Rows[i]["CliSex"].ToString();
                        EntidadCliente.Direccion = tableClientes.Rows[i]["CliDir"].ToString();
                        ListClientes.Add(EntidadCliente);
                    }
                }
                catch (Exception)
                {
                    
                }

                return ListClientes;
            }

            /// <summary>
            /// registra los datos de la tabla clientes
            /// </summary>
            /// <param name = "Entidad">Objeto del tipo cliente enviado como parametro para el proceso de registro<param>
            /// <returns>devuelve registro insertado en la tabla clientes</returns>
            public static dsSES.DBC_ClientesDataTable RegCliente(EntityCliente Entidad)
            {
                return adaptador.InsCliente(Entidad.Nombre, Entidad.Apellido, Entidad.Sexo, Entidad.Direccion);
            }

            /// <summary>
            /// Elimina los datos de la tabla clientes
            /// </summary>
            /// <param name = "Entidad">Objeto del tipo cliente enviado como parametro para el proceso de eliminado<param>
            /// <returns>devuelve un valor numérico 1= se realizo proceso correctamente | 0=no se proceso correctamente</returns>
            public static int DelCliente(EntityCliente Entidad)
            {
                int rpta;
                try
                {
                    rpta = adaptador.DelClienteById(Convert.ToInt32(Entidad.Id));
                }
                catch (Exception ex)
                {
                    rpta = 0;
                }

                return rpta;
            }

            /// <summary>
            /// Actualiza los datos de la tabla clientes
            /// </summary>
            /// <param name = "Entidad">Objeto del tipo cliente enviado como parametro para el proceso de modificado<param>
            /// <returns>devuelve un valor numérico 1= se realizo proceso correctamente | 0=no se proceso correctamente</returns>
            public static int ActCliente(EntityCliente Entidad)
            {
                int rpta;

                try {
                    rpta = adaptador.ActClienteById(Convert.ToInt32(Entidad.Id), Entidad.Nombre, Entidad.Apellido, Entidad.Sexo, Entidad.Direccion);
                }
                catch (Exception) {
                    rpta = 0;
                }

                return rpta;
            }
        #endregion
    }
}
