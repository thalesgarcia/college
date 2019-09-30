using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alura.Loja.Testes.ConsoleApp
{
    interface IProdutoDAO
    {
        void AdcionarPRoduto(Produto p);
        void AtualizarProduto(Produto p);
        void DeletarProduto(Produto p);
        IList<Produto> Produtos();

    }
}
