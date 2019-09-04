using Bank.Funcionario;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    public class BonificationManager
    {
        private double _bonificationTotal;
        public void Registry(Funcionarios fun)
        {
           _bonificationTotal+= fun.getBonification();
        }
      
        public double GetBonifications()
        {
            return _bonificationTotal;
        }
    }
}
