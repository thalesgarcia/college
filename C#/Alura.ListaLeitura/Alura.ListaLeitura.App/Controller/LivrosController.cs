using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Alura.ListaLeitura.App
{
    public  class LivrosController : Controller
    {

        //public static string CarregaArquivoHtml(string v)
        //{
        //    var nome = "HTML/" + v + ".html";
        //    //using (var arq = File.OpenText(nome))
        //    //{
        //    //    return arq.ReadToEnd();
        //    //}
        //}
        public string Detalhes(int id)
        {
            var repo = new LivroRepositorioCSV();
            var livro = repo.Todos.First(l => l.Id == id);
            return livro.Detalhes();
        }
        //public static string CarregaLista(IEnumerable<Livro> livros)
        //{
        //    var arq = CarregaArquivoHtml("Ler");
            
        //    return arq.Replace("#ITEM#", "");
        //}
        public IActionResult ParaLer()
        {
           
            var repo = new LivroRepositorioCSV();
            //var html = CarregaLista(repo.ParaLer.Livros);
            ViewBag.livros = repo.ParaLer.Livros;
            //var html = new ViewResult { ViewName = "Ler" }; 
            return View("Ler");
           
        }
        public IActionResult Lendo()
        {
            var repo = new LivroRepositorioCSV();
            ViewBag.livros = repo.Lendo.Livros;
            //return context.Response.WriteAsync(html);
            return View("Ler");
        }
        public IActionResult Lidos()
        {
            var repo = new LivroRepositorioCSV();
            ViewBag.livros = repo.Lidos.Livros;
           // return context.Response.WriteAsync(html);
            return View("Ler");
        }
        public  string Teste()
        {
            return "TESTEEEEE";
        }
    }
}
