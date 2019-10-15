using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Alura.ListaLeitura.App
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            //LivrosLogica livro = new LivrosLogica();
            //CadastroLogica cad = new CadastroLogica();
            //var rota = new RouteBuilder(app);
            //rota.MapRoute("{classe}/{metodo}", Roteamento.Tratamento);
            //rota.MapRoute("Livros/ParaLer", livro.ParaLer);
            //rota.MapRoute("Livros/Lendo", livro.Lendo);
            //rota.MapRoute("Livros/Lidos", livro.Lidos);
            //rota.MapRoute("Cadastro/NovoLivro/{nome}/{autor}", cad.NovoLivro);
            //rota.MapRoute("Livros/Detalhes/{id:int}", livro.Detalhes);
            //rota.MapRoute("Cadastro/ExibeFormulario", cad.ExibeFormulario);
            //rota.MapRoute("Cadastro/Incluir", cad.Incluir);
            //var rotas = rota.Build();
            //app.UseRouter(rotas);
            //app.Run(Rotas); 
            app.UseMvcWithDefaultRoute();
        }

       
        //Classe necessaria para criação de rotas no asp.ner core.
        public void ConfigureServices(IServiceCollection service)
        {
           // service.AddRouting(); //O mvc ja implementa 
            service.AddMvc();
        }

        //Roteamento rudimentar usando Dictionary.
        //public Task Rotas (HttpContext contexto)
        //{
        //    var repo = new LivroRepositorioCSV();
        //    var caminho = new Dictionary<string, RequestDelegate>
        //    {
        //        { "Livros/ParaLer", LivrosParaLer },
        //        {"Livros/Lendo",Lendo},
        //        {"Livros/Lidos",Lidos}
        //    };
        //    if (caminho.ContainsKey(contexto.Request.Path))
        //    {
        //        var met = caminho[contexto.Request.Path];
        //        return met.Invoke(contexto);//efetuando a chamada de um metodo task
        //    }
        //    else
        //    {
        //        contexto.Response.StatusCode = 404;
        //        return contexto.Response.WriteAsync("Caminho Não existe");
        //    }
        //}
       
    }
}