using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alura.ListaLeitura.App.Utils
{
    public class Roteamento
    {
        public static Task Tratamento(HttpContext context)
        {
            var classe = context.GetRouteValue("classe").ToString();
            var metodo = context.GetRouteValue("metodo").ToString();
            //ref é o namespace
            var classeCompleta = $"Alura.ListaLeitura.App.Logica.{classe}Logica";

            //REFLECTION

            var tipoClasse = Type.GetType(classeCompleta);
            var metodos = tipoClasse.GetMethods().Where(m => m.Name == metodo).First();
            //get the info and creates the delegate
            var requestDel = (RequestDelegate)Delegate.CreateDelegate(typeof(RequestDelegate), metodos);
            return requestDel.Invoke(context);
        }
    }
}
