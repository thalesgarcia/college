using Bank.Funcionario;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.System
{
   public  class InternalSystem
    {
        public bool Login(Authentication fun, string pass)
        {
            bool authUser = fun.Authenticate(pass);
            if (authUser)
            {
                Console.WriteLine("Welcome ");
                return true;
            }
            else
            {
                Console.WriteLine("Incorrect password");
                return false;
            }

        }
    }
}
