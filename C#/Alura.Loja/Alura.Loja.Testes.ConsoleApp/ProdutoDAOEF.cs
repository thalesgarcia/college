using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alura.Loja.Testes.ConsoleApp
{
     class ProdutoDAOEF : IDisposable, IProdutoDAO
    {
        private LojaContext contexto { get; set; }

        public ProdutoDAOEF()
        {
            contexto = new LojaContext();
        }
        public void AdcionarPRoduto(Produto p)
        {
            contexto.Produtos.Add(p);
            contexto.SaveChanges();
        }

        public void AtualizarProduto(Produto p)
        {
            contexto.Produtos.Update(p);
            contexto.SaveChanges();
        }

        public void DeletarProduto(Produto p)
        {
            contexto.Remove(p);
            contexto.SaveChanges();
        }

        public void Dispose()
        {
            contexto.Dispose();
        }

        public IList<Produto> Produtos()
        {
            return contexto.Produtos.ToList();
        }
    }
}
