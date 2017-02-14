// Programa (Objeto)	:	Proyecto SES|Entidad Cliente
// Autor			    :	Fred Torres Torres
// Fecha			    : 	15-02-2016
// Descripción		    :	Creacion de propiedades para la entidad cliente.
// ----------------------------------------------------------------------------------------------------------------------
// <Modificaciones>     : <#Requerimiento>| <Autor(Apellidos y Nombres)>| <Fecha(DD-MM-AAAA)>| <Motivo>
// ----------------------------------------------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FrameworkSES.Entitys
{
    public class EntityCliente
    {
        #region Propiedades
            /// <summary>
            /// Codigo Cliente (String)
            /// </summary>
            public string Id { get; set; }

            /// <summary>
            /// Nombre Cliente (String)
            /// </summary>
            public string Nombre { get; set; }

            /// <summary>
            /// Apellido Cliente (String)
            /// </summary>
            public string Apellido { get; set; }

            /// <summary>
            /// Sexo Cliente (String)
            /// </summary>
            public string Sexo { get; set; }

            /// <summary>
            /// Dirección Cliente (String)
            /// </summary>
            public string Direccion { get; set; }
        #endregion
    }
}
