using System;
using System.Collections.Generic;

namespace Alura.Loja.Testes.ConsoleApp
{
    public class Promocao
    {
        public int Id { get; set; }
        public string Descricao { get; internal set; }
        public DateTime DataInicio { get; internal set; }
        public DateTime DataTermino { get; internal set; }
        public IList<PromocaoProduto> Produtos { get; internal set; }
        public Promocao()
        {
            Produtos = new List<PromocaoProduto>();
        }
        //MEtodo para incluir o produto na classe join do banco do relacionamento n x n
        public void IncluirProduto(Produto p1)
        {
            Produtos.Add(new PromocaoProduto() { Produto = p1 });
        }

        public override string ToString()
        {
            return $"Descricao: {Descricao}\n DAta de Inicio: {DataInicio} \n Data de Termino: {DataTermino} \n";
        }
    }
}
