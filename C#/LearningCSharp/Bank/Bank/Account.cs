using Bank.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    public class Account
    {
        private Client client;
        private readonly int _agency;
        private readonly int _number;
        private double _balance;
        public static int TotalAccountCreated {get ; private set; }

        public int invalidWithdraws { get;private set; }
        public int invalidTransfers { get;private set; }

        public static double OperationTax { get; private set; }

        public double Balance
        {
            get { return _balance; }
            set {
                if (value <= 0)
                    return;

                _balance = value; }
        }


        public int Number
        {
            get { return _number; }
        }

        public int Agency
        {
            get { return _agency; }
        }


        public Client Titular
        {
            get { return client; }
            set { client = value; }
        }

        public Account(int agency, int num)
        {
            if(agency==0)
                throw new ArgumentException("The agency number accepts numbers higher then 0",nameof(agency));
            if (num == 0)
                throw new ArgumentException("The number accepts numbers higher then 0", nameof(num));
            _agency = agency;
            _number = num;

            TotalAccountCreated++;
            OperationTax = 30 / TotalAccountCreated;
        }

        public void Withdraw(double val)
        {
            if(val < 0)
            {
                throw new ArgumentException("Withdraw value invalid!", nameof(val));
            }
            if (Balance < val)
            {
                invalidWithdraws++;
                throw new InsufficientBalanceException(val,Balance);
            }
            Balance -= val;
        }

        public void Deposit(double val)
        {
            Balance += val;
        }
        public void Transfer(double val, Account destiny)
        {
            if (val < 0)
            {
                throw new ArgumentException("The transfer value is invalid!", nameof(val));
            }
            if (Balance < val)
            {
                throw new InsufficientBalanceException(val, Balance);
            }
            try
            {
                Withdraw(val);

            }
            catch(InsufficientBalanceException e)
            {
                invalidTransfers++;
                throw new FinancialOperationException("Operation failed", e);
            }
            destiny.Deposit(val);
        }

    }
}
