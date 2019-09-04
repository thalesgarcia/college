using Bank.System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Funcionario
{
   public  class AccountManagers : AuthenticatedFunc
    {

      
        public AccountManagers(string ssn): base(4000,ssn)
        {

        }
        public override double getBonification()
        {

            return Salary * 0.25;
        }

        public override void UpdateSalary()
        {
            Salary *= 1.05;
        }
       

    }
}
