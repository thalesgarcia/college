using Bank.System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Funcionario
{
    public abstract class AuthenticatedFunc : Funcionarios, Authentication
    {
        private string _password;

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        public AuthenticatedFunc(double sal, string ssn): base(sal,ssn)
        {
        }

        public bool Authenticate(string pass)
        {
            return Password == pass;
        }
    }
}
