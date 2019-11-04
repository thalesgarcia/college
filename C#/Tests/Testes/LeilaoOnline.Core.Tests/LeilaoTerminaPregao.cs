using Xunit;

namespace LeilaoOnline.Core.Tests
{
    public class LeilaoTerminaPregao
    {
        [Theory]
        [InlineData(1000,new double[] { 800, 900, 1000, 1200 })]
        [InlineData(1000,new double[] { 900,800,1200,1000})]
        [InlineData(800,new double[] {800 })]
        public  void LeilaoVariosLances(double valorEsperado,double []ofertas)
        {
            //Arrange
            var leilao = new Leilao("Van Gogh");
            var fulano = new Interessada("Fulano da silva", leilao);
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
        public void LeilaoSemLances()
        {
            var leilao = new Leilao("Estatua de Zeus");
            //Act
            leilao.TerminaPregao();
            //Assert
            var valorEsperado = 0;
            var valObtido = (decimal)leilao.Ganhador.Valor;
            Assert.Equal(valorEsperado, valObtido);
        }
    }
}
