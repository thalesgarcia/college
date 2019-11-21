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
        [InlineData(2, new double[] { 800, 900 })]
        [InlineData(4, new double[] { 800, 900, 1000, 1200 })]
        public void NaoPermiteNovosLancesDadoLeilaoFinalizado(int qtd, double[] ofertas)
        {
            var modalidade = new MaiorValor();
            var leilao = new Leilao("Estatua de Zeus",modalidade);
            var fulano = new Interessada("Fulano", leilao);
            var maria = new Interessada("Maria", leilao);
            leilao.IniciaPregao();
            for (int i = 0; i < ofertas.Length; i++)
            {
                var valor = ofertas[i];
                if (i % 2 == 0)
                {
                    leilao.RecebeLance(fulano, valor);
                }
                leilao.RecebeLance(maria, valor);
            }
            //foreach (var valor in ofertas)
            //{
            //    leilao.RecebeLance(fulano, valor);
            //}

            leilao.TerminaPregao();

            //Act metodo sob test
            leilao.RecebeLance(fulano, 1000);
            //Assert
            var quantidadeObtida = leilao.Lances.Count();
            Assert.Equal(qtd, quantidadeObtida);
        }

        [Theory]
        [InlineData(2, new double[] { 800, 900 })]
        [InlineData(4, new double[] { 800, 900, 1000, 1200 })]
        public void RetornaMaiorValorDadoleilaoComPeloMenosUmLance(
                    double valorEsperado,
                    double[] ofertas)
        {
            var modalidade = new MaiorValor();
            //Arrange - cenário
            var leilao = new Leilao("Van Gogh",modalidade);
            var fulano = new Interessada("Fulano", leilao);
            var maria = new Interessada("Maria", leilao);
            leilao.IniciaPregao();

            for (int i = 0; i < ofertas.Length; i++)
            {
                var valor = ofertas[i];
                if ((i % 2) == 0)
                {
                    leilao.RecebeLance(fulano, valor);
                }
                else
                {
                    leilao.RecebeLance(maria, valor);
                }
            }

            //código omitido
        }
        [Fact]
        public void NaoAceitaProximoLanceDadoMesmoClienteRealizouUltimoLance()
        {
            var modalidade = new MaiorValor();
            var leilao = new Leilao("Estatua de Zeus",modalidade);
            var fulano = new Interessada("Fulano", leilao);
            leilao.IniciaPregao();
            leilao.RecebeLance(fulano, 1200);

            //Act metodo sob test
            leilao.RecebeLance(fulano, 1000);

            leilao.TerminaPregao();

            //Assert
            var qdtEsperada = 1;
            var quantidadeObtida = leilao.Lances.Count();
            Assert.Equal(qdtEsperada, quantidadeObtida);
        }
    }
}
