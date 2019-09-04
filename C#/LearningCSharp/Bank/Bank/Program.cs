using Bank.Exceptions;
using Bank.Funcionario;
using Bank.System;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                LoadAccounts();
                BonificationCalc();
                Login();
                Console.WriteLine(Account.OperationTax);
            }
            catch (Exception)
            {
                Console.WriteLine("Catch at main");
            }
            finally
            {
                Console.ReadKey();
            }
        }

        private static void InnerTest()
        {
            try
            {
                Account acc = new Account(338, 752669);
                acc.Balance = 100;
                acc.Withdraw(500);
                Account acc2 = new Account(338, 789966);
                acc.Transfer(-450, acc2);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
            } //catch(ArgumentException e)
              //{

            //    Console.WriteLine("Erro de argumento " +e.Message + " argument: " + e.ParamName);
            //}
            //catch(InsufficientBalanceException ie)
            //{
            //    Console.WriteLine(ie.Message );
            //}
        }

        public static void LoadAccounts()
        {

            using(ArchiveReader reader = new ArchiveReader("test.txt"))
            {
                reader.LineReader();
            }

            //ArchiveReader reader = null;
            //try
            //{
            //    reader = new ArchiveReader("account.txt");
            //    reader.LineReader();

            //}catch(IOException ioe)
            //{
            //    Console.WriteLine("IOE captured and treated");
            //    Console.WriteLine(ioe.Message);
            //}
            //finally
            //{
            //    if(reader!=null)
            //        reader.Close();
            //}
        }
           

        public static void BonificationCalc()
        {
            BonificationManager bm = new BonificationManager();

            Designers Diego = new Designers("833.222.048-39");
            Diego.Name = "Diego arruda";
            bm.Registry(Diego);

            Directors maria = new Directors("159.753.398-04");
            maria.Name = "Maria Ana Soares";
            bm.Registry(maria);

            AccountManagers michael = new AccountManagers("326.985.628-89");
            michael.Name = "Michael Hoffman";
            bm.Registry(michael);

            Auxiliar mirta = new Auxiliar("325.541.654-99");
            mirta.Name = "Mirta Roberta silva";
            bm.Registry(mirta);

           


            Console.WriteLine("Total bonifications " + bm.GetBonifications());
        }

        public static void Login()
        {
            InternalSystem Is = new InternalSystem();
            Directors al = new Directors("321.589.620.02");
            al.Name = "Albert Parkinson";
            al.Password = "123";
            ComercialPartner cp = new ComercialPartner();
            cp.Password = "4567898";

            Is.Login(cp, "4567898");
            Is.Login(cp, "1236456");
            Is.Login(al, "123");
            Is.Login(al, "abc");
            Console.ReadKey();
        }
    }
}
