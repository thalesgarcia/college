using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alura.Loja.Testes.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
           // InsertUsingEntity();
           // Console.WriteLine("Produto inserido, gostaria de adicionar mais ? [1] SIM [0]NAO [3] Listar [4] Atualizar Produto [5] Apagar Produto");
           // string tecla;
           // tecla = Console.ReadLine();
           // if(tecla == "0")
           //  Console.WriteLine("Application finished");
           // if (tecla == "1")
           //     InsertUsingEntity();
           // if (tecla == "3")
           //     RecuperarDadosEntity();
           // if (tecla == "4")
           // {
           //     Console.WriteLine("INforme o id do produto a ser atualizado");
           //     var id = Console.ReadLine();
           //     AtualizaProduto(id);

           // }
           // if (tecla == "5")
           // {
           //     var id = Console.ReadLine();
           //     ExcluirProduto(id);
           // }

            using(var contexto = new LojaContext())
            {
                //var p = contexto.Produtos.ToList();
                //foreach (var item in p)
                //{
                //    Console.WriteLine(item);
                //}


                //Console.WriteLine("++++++++++++++");
                //foreach (var item in contexto.ChangeTracker.Entries())
                //{
                //    Console.WriteLine(item.State);
                //    //mostra a referencia do objeto em si e nao só o estado
                //    Console.WriteLine(item.Entity.ToString());
                //}
                // ShowEntries(contexto.ChangeTracker.Entries());

                //var newProduto = new Produto() { Nome = "Alvejante", Categoria = "Limpeza", Preco = 4.5 };
                //contexto.Produtos.Add(newProduto);
                //var p1 = contexto.Produtos.Last();
                //contexto.Produtos.Remove(p1);


                //ShowEntries(contexto.ChangeTracker.Entries());
                //contexto.SaveChanges();
                //ShowEntries(contexto.ChangeTracker.Entries());
                //Migration para toda a aplicação.
                //contexto.Database.Migrate();

                // var pao = new Produto()
                //{
                //    Nome = "Pão Francês",
                //    PrecoUnitario = 0.66,
                //    Unidade = "Unidade",
                //    Categoria = "Padaria"
                //};

                //var compra = new Compra();
                //compra.Quantidade = 6;
                //compra.Produto = pao;
                //compra.Preco = pao.PrecoUnitario * compra.Quantidade;


                //contexto.Compras.Add(compra);
                var prods = contexto.Produtos.Where(p => p.Categoria == "Livros").ToList();
                var promo = new Promocao()
                {
                    Descricao = "Promo de natal",
                    DataInicio = DateTime.Now,
                    DataTermino = DateTime.Now.AddMonths(2),
                };
                foreach (var item in prods)
                {
                    promo.IncluirProduto(item);
                }
                contexto.Promocoes.Add(promo);
                ShowEntries(contexto.ChangeTracker.Entries());
                contexto.SaveChanges();

                var pp = contexto.Promocoes.ToList();

                var promocao = contexto
                .Promocoes
                .Include(p => p.Produtos)
                .ThenInclude(ppp => ppp.Produto)
                .FirstOrDefault()
                ;

                Console.WriteLine("\nMotrando os produtos da promoção...");
                foreach (var item in promocao.Produtos)
                {
                    Console.WriteLine(item.Produto);
                }

            }

            Console.ReadKey();
        }

        private static void ShowEntries(IEnumerable<EntityEntry>entries)
        {
            Console.WriteLine("============");
            foreach (var item in entries)
            {
                Console.WriteLine();
                Console.WriteLine(item.Entity.ToString() + '-' + item.State);
            }
        }

        private static void UmxUm()
        {

            var cli = new Cliente();
            cli.Nome = "Alberto";
            cli.EnderecoEntrega = new Endereco()
            {
                Logradouro = "Avenida",
                Numero = 12,
                Complemento = "",
                Bairro = "Centro"
            };

            using (var contex = new LojaContext())
            {
                contex.Clientes.Add(cli);
                contex.SaveChanges();

                var end = contex.Enderecos.Find(1003);
                Console.WriteLine($"Endereço: {end}");
                Console.ReadKey();

                var c = contex.Clientes.Find(1002);
                Console.WriteLine($"Cliente: {c}");

                contex.Clientes.Remove(c);
                ShowEntries(contex.ChangeTracker.Entries());
                contex.SaveChanges();
                Console.ReadKey();

            }
        }
        private static void MuitosXMuitos()
        {
            using(var contexto = new LojaContext())
            {
                var p1 = contexto.Produtos.First();
                var p2 = contexto.Produtos.Last();

                var p3 = new Produto()
                {
                    Nome = "Xiomei Redmi Note 6 PRo",
                    PrecoUnitario = 1200.99,
                    Categoria = "Telefonia",
                    Unidade = "Unidade"
                };

                var promo = new Promocao();
                promo.Descricao = "Black Friday";
                promo.DataInicio = DateTime.Now;
                promo.DataTermino = DateTime.Now.AddMonths(1);
                promo.IncluirProduto(p1);
                promo.IncluirProduto(p2);
                promo.IncluirProduto(p3);

                contexto.Promocoes.Add(promo);

                var promos = contexto.Promocoes.Find(1);
                contexto.Promocoes.Remove(promos);

                ShowEntries(contexto.ChangeTracker.Entries());
                contexto.SaveChanges();
            }
           

        }

        private static void AtualizaProduto(string id)
        {
            int aux = Convert.ToInt32(id);
            using(var context = new ProdutoDAOEF())
            {
               IList<Produto>p = context.Produtos();
                Produto paux = p.Where(b=>b.Id == aux).FirstOrDefault();
                Console.WriteLine($"Nome do produto: {paux.Nome}. Informe o nome do produto");
                string nome = Console.ReadLine();
                paux.Nome = nome;
                Console.WriteLine($"Valor do produto: {paux.PrecoUnitario}. Informe o nome valor");
                string va = Console.ReadLine();
                paux.PrecoUnitario = Convert.ToDouble(va);
                context.AdcionarPRoduto(paux);

            }
            RecuperarDadosEntity();
        }

        private static void ExcluirProduto(string id)
        {
            using(var contexto = new ProdutoDAOEF())
            {
                Console.WriteLine("Informe o id do produto a ser excluido: ");
                int idSearch = Convert.ToInt32(id);
                IList<Produto> produtos = contexto.Produtos();
                foreach (var item in produtos)
                {
                    if (item.Id == idSearch)
                    {
                        contexto.DeletarProduto(item);
                    }

                }

                RecuperarDadosEntity();
            }
        }

        private static void RecuperarDadosEntity()
        {
            using(var context= new ProdutoDAOEF())
            {
                IList<Produto> produtos = context.Produtos();
                foreach (var item in produtos)
                {
                    Console.WriteLine($"Produto \n ID: {item.Id} \n Nome: {item.Nome} \n Categoria: {item.Categoria} \n Valor: {item.PrecoUnitario}");
                }
            }
        }

        private static void InsertUsingEntity()
        {
            Produto p = new Produto();
            p.Nome = "Harry Potter";
            p.Categoria = "Livros";
            p.PrecoUnitario = 30;

            using (var context = new ProdutoDAOEF())
            {
                context.AdcionarPRoduto(p);
            }
        }
    }
}
