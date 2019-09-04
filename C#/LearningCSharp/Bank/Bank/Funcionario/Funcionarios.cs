using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Funcionario
{
    public abstract class Funcionarios
    {
        private string _name;
        private string _ssn;
        private double _salary; //0 - Director, 1 Manager, 2 - Normal

        public static int totalFunc { get; private set; }
        


        public double Salary
        {
            get { return _salary; }
           protected set { _salary = value; }
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


        public abstract double getBonification();

        public abstract void UpdateSalary();

        public Funcionarios(double sal,string ssn)
        {
            Salary = sal;
            SocialSecurityNumber = ssn;
            totalFunc++;
        }
        public Funcionarios(string ssn): this(1500,ssn)
        {
            Salary = 1500;
            SocialSecurityNumber = ssn;
            totalFunc++;
        }
       // public abstract bool Authenticate(string pass);


    }
}
