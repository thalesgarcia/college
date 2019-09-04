using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Funcionario
{
    public class Designers : Funcionarios
    {
        public Designers(string ssn):base(3000,ssn)
        {

        }
        public override double getBonification()
        {

            return Salary * 0.17;
        }

        public override void UpdateSalary()
        {
            Salary *= 1.11;
        }
    }
}
