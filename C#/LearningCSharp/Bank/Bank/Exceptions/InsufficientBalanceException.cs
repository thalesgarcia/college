using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Exceptions
{
    public class InsufficientBalanceException : FinancialOperationException
    {
        public double Balance { get;  }
        public double BalanceValue { get; }

        public InsufficientBalanceException(string msg):base(msg)
        {

        }
        public InsufficientBalanceException()
        {

        }

        public InsufficientBalanceException(double balance, double balanceVal):this("You trying to withdraw: "+ balance +" and you only have: "+balanceVal)
        {
            Balance = balance;
            BalanceValue = balanceVal;

        }
        public InsufficientBalanceException(string msg, Exception ex):base(msg,ex)
        {

        }
    }
}
