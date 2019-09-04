using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_CreatingVariables
{
    class Program
    {
        static void Main(string[] args)
        {
            double salario = 3300;
            double IR = 0;
            double deducao = 0;
            if(salario >= 1900 && salario <=2800)
            {
                IR = (salario * 7.5) / 100;
                deducao = 142;
            }
            else if(salario >=2800.01 && salario <=3751){
                IR = (salario * 15) / 100;
                deducao = 350;
            }
            else if(salario >=3751.01 && salario <= 4664)
            {
                IR = (salario * 22.5) / 100;
                deducao = 636;
            }

            Console.WriteLine("Salario é de R$: " + salario + " com IR de+. R$: " + IR + " e deducao de R$: " + deducao);

            int i;
            for (i = 0; i < 100; i++)
            {
                if (i % 3 == 0)
                    Console.WriteLine("O numero: " + i + " é multiplo de 3");
            }

            int fatorial = 1;
            for (int j = 1; j < 11; j++)
            {
                fatorial *= j;
                Console.WriteLine("Fatorial de " + j + " = " + fatorial);
            }

            Console.ReadKey();
        }
    }
}
