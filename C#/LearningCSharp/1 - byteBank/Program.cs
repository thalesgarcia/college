using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1___byteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente contaC= new ContaCorrente();
            Console.WriteLine("Conta: " + contaC.titular + " " + contaC.agencia + " " + contaC.conta + " " + contaC.saldo);
            contaC.agencia = 895;
            contaC.conta = 153695;
            contaC.titular = "aparecido";
            contaC.saldo = 1500.66;

            Console.WriteLine("Conta corrente: " + contaC.titular + " "+ contaC.agencia + " "+ contaC.conta + " "+ contaC.saldo);

            Console.ReadKey();
        }
    }
}
