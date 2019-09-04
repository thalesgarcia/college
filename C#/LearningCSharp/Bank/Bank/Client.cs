using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    public class Client
    {
        private string _name;
        private string _ssn;
        private string _profission;

        public string Profission
        {
            get { return _profission; }
            set { _profission = value; }
        }


        public string SocialSecurityNumber
        {
            get { return _ssn; }
           private set { _ssn = value; }
        }


        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

    }
}
