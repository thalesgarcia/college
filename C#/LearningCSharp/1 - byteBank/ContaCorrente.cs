class ContaCorrente
{
    public string titular { get; set; }
    public int agencia { get; set; }
    public int conta { get; set; }
    public double saldo { get; set; }


    public ContaCorrente()
    {
        titular = "";
        agencia = 0;
        conta = 0;
        saldo = 0;
    }
}