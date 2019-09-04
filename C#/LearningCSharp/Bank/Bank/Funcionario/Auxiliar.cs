using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Funcionario
{
   public class Auxiliar : Funcionarios
    {
       
        public Auxiliar(string ssn):base(2000,ssn)
        {

        }
        public override double getBonification()
        {

            return Salary * 0.2;
        }

        public override void UpdateSalary()
        {
            Salary *= 1.1;
        }
    }
}
