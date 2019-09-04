using Bank.Funcionario;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.System
{
   public interface  Authentication
    {
        bool Authenticate(string pass);
        
    }
}
