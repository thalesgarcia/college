using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Alura.ListaLeitura.App
{
   public  class CadastroController
    {
        public string Incluir(Livro livro)
        {
            //var livro = new Livro()
            //{
            //    Titulo = context.Request.Form["nome"].First(),
            //    Autor = context.Request.Form["autor"].First()

            //};
            var repo = new LivroRepositorioCSV();
            repo.Incluir(livro);
            return "Livro Adc";
        }

        public static string CarregaArquivoHtml(string v)
        {
            var nome = "HTML/" + v + ".html";
            using (var arq = File.OpenText(nome))
            {
                return arq.ReadToEnd();
            }
        }

        public IActionResult ExibeFormulario()
        {
            LivrosController livro = new LivrosController();
            //var html = CarregaArquivoHtml("formulario");
            var html = new ViewResult { ViewName = "formulario" };
            return html;
        }

    }
}
