using System;

namespace LeilaoOnline.Core.ConsoleApp
{
   public class Program
    {
        private static void LeilaoVariosLances()
        {
            //Arrange
            var leilao = new Leilao("Van Gogh");
            var fulano = new Interessada("Fulano da silva", leilao);
            var maria = new Interessada("Maria da paz", leilao);


            leilao.RecebeLance(fulano, 1000);
            leilao.RecebeLance(maria, 1100);
            leilao.RecebeLance(fulano, 1150);


            //Act
            leilao.TerminaPregao();

            //Assert
            var valorEsperado = 1000;
            var valObtido =(decimal)leilao.Ganhador.Valor;
            Verifica(valorEsperado, valObtido);
        }
        private static void LeilaoComUmLance()
        {
            //Arrange
            var leilao = new Leilao("Estatua de Zeus");
            var fulano = new Interessada("Astor Amadeus", leilao);
            leilao.RecebeLance(fulano, 2000);
            //Act
            leilao.TerminaPregao();
            //Assert
            var valorEsperado = 2000;
            var valObtido = (decimal)leilao.Ganhador.Valor;
            Verifica(valorEsperado, valObtido);
        }

        private static void Verifica(decimal valorEsperado, decimal valObtido)
        {
            if (valorEsperado == valObtido)
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine($"Ganhador : {valObtido} OK");
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.DarkRed;
                Console.WriteLine($"You have failed this city. Esperado: {valorEsperado}, Obtido: {valObtido}");

            }
            Console.ReadKey();
        }

        static void Main()
        {
            LeilaoVariosLances();
            LeilaoComUmLance();
        }

      
    }
}
