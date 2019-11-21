using Xunit;

namespace LeilaoOnline.Core.Tests
{
    public class LeilaoTerminaPregao
    {
        [Theory]
        [InlineData(1000, new double[] { 800, 900, 1000, 1200 })]
        [InlineData(1000, new double[] { 900, 800, 1200, 1000 })]
        [InlineData(800, new double[] { 800 })]
        public void LeilaoVariosLances(double valorEsperado, double[] ofertas)
        {
            //Arrange
            IModalidadeAvaliacao modalidade = new MaiorValor();
            var leilao = new Leilao("Van Gogh",modalidade);
            var fulano = new Interessada("Fulano da silva", leilao);
            leilao.IniciaPregao();
            foreach (var valor in ofertas)
            {
                leilao.RecebeLance(fulano, valor);
            }
            //Act
            leilao.TerminaPregao();

            //Assert
            var valObtido = (decimal)leilao.Ganhador.Valor;
            // Verifica(valorEsperado, valObtido);
            Assert.Equal(valorEsperado, valorEsperado);
        }

        //[Fact]
        //public void LeilaoComUmLance()
        //{
        //    //Arrange
        //    var leilao = new Leilao("Estatua de Zeus");
        //    var fulano = new Interessada("Astor Amadeus", leilao);
        //    leilao.RecebeLance(fulano, 2000);
        //    //Act
        //    leilao.TerminaPregao();
        //    //Assert
        //    var valorEsperado = 2000;
        //    var valObtido = (decimal)leilao.Ganhador.Valor;
        //    Assert.Equal(valorEsperado, valObtido);
        //}
        [Fact]
        public void LancaInvalidOperationExceptionDadoLeilaoNaoInicializado()
        {
            var modalidade = new MaiorValor();
            var leilao = new Leilao("Estatua de Zeus",modalidade);

            Assert.Throws<System.InvalidOperationException>(
                () => leilao.TerminaPregao()
            );
            //like the try->catch
            //try
            //{

            //    //Act

            //    leilao.TerminaPregao();
            //    Assert.True(false);

            //}
            //catch (System.Exception e)
            //{
            //    //Assert

            //    Assert.IsType<System.InvalidOperationException>(e);
            //}
        }

        [Fact]
        public void LeilaoSemLances()
        {
            var modalidade = new MaiorValor();
            var leilao = new Leilao("Estatua de Zeus",modalidade);
            leilao.IniciaPregao();
            //Act
            leilao.TerminaPregao();
            //Assert
            var valorEsperado = 0;
            var valObtido = (decimal)leilao.Ganhador.Valor;
            Assert.Equal(valorEsperado, valObtido);
        }
        [Theory]
        [InlineData(1200,1250,new double[] { 800,1150,1400,1250})]
        public void RetornaValorSuperiorMaisProximoDadoLeilaoNessaModalidade(double valorDestino, double valorEsperado, double[] ofertas)
        {
            var modalidade = new OfertaSuperiorMaisProxima(valorDestino);
            var leilao = new Leilao("Estatua de Zeus", modalidade);
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
            //Act
            leilao.TerminaPregao();

            //Assert
            Assert.Equal(valorEsperado, leilao.Ganhador.Valor);
        }
    }
}
