namespace Alura.Loja.Testes.ConsoleApp
{
    public class Cliente
    {
        public Cliente()
        {
        }
        public int Id { get; set; }
        public string Nome { get; internal set; }
        public Endereco EnderecoEntrega { get; set; }
        public override string ToString()
        {
            return $"CLiente: {Nome}";

        }
    }
}