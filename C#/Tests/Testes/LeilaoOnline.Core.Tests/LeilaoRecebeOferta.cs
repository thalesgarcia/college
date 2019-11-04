using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace LeilaoOnline.Core.Tests
{
    public class LeilaoRecebeOferta
    {
        [Theory]
        [InlineData(2,new double[] {800,900 })]
        [InlineData(4,new double[] { 800,900,1000,1200})]
        public void NaoPermiteNovosLancesDadoLeilaoFinalizado(int qtd, double[]ofertas)
        {
            var leilao = new Leilao("Estatua de Zeus");
            var fulano = new Interessada("Fulano", leilao);
            foreach (var valor in ofertas)
            {
                leilao.RecebeLance(fulano, valor);
            }

            leilao.TerminaPregao();

            //Act metodo sob test
            leilao.RecebeLance(fulano, 1000);
            //Assert
            var quantidadeObtida = leilao.Lances.Count();
            Assert.Equal(qtd, quantidadeObtida);
        }
    }
}
