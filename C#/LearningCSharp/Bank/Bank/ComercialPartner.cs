using Bank.System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    public class ComercialPartner : Authentication
    {
        private string _password;

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }
        public bool Authenticate(string pass)
        {
            return Password == pass;
        }

    }
}
