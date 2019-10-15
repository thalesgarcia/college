﻿using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Hosting;
using System;

namespace Alura.ListaLeitura.App
{
    class Program
    {
        static void Main(string[] args)
        {
            var _repo = new LivroRepositorioCSV();
            //Configura qual servidor sera usado, no caso eesse Kestrel e 1 inicializador de classe  depois do kestrel,
            //que é a criação da classe startup(crie metodo configure para nao dar erro
            IWebHost host = new WebHostBuilder().UseKestrel().UseStartup<Startup>().Build();
            host.Run();

            //ImprimeLista(_repo.ParaLer);
            //ImprimeLista(_repo.Lendo);
            //ImprimeLista(_repo.Lidos);
        }

        static void ImprimeLista(ListaDeLeitura lista)
        {
            Console.WriteLine(lista);
        }
    }
}
