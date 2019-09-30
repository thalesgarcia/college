namespace Alura.Loja.Testes.ConsoleApp
{
    public class Endereco
    {
        //public int Id { get; set; }
        public string Logradouro { get; internal set; }
        public int Numero { get; internal set; }
        public string Complemento { get; internal set; }
        public string Bairro { get; internal set; }
        public Cliente Cliente { get; set; }
        public override string ToString()
        {
            return $"Logradouro: {Logradouro}\n Número: {Numero}\n Complemento: {Complemento}\n Bairro: {Bairro}";
        }
    }
}