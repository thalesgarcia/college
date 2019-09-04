using Bank.System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Funcionario
{
   public class Directors : AuthenticatedFunc
    {
        

        public override double getBonification()
        {
            
            return Salary *0.5;
        }

        public override void UpdateSalary()
        {
            Salary *= 1.15;
        }
        //it gets the "father" constructor and puts the value in this constructor
        public Directors(string ssn) : base (5000,ssn)
        {
           
        }

       
    }
}
