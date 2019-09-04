using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Exceptions
{
   public class FinancialOperationException:Exception
    {
        public FinancialOperationException()
        {

        }
        public FinancialOperationException(string msg):base(msg)
        {

        }
        public FinancialOperationException(string msg, Exception inner):base(msg,inner)
        {

        }
    }
}
