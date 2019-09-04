using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    public class ArchiveReader : IDisposable
    {
        public string Archive { get; }

        public ArchiveReader(string arquivo)
        {
            Archive = arquivo;
            throw new  FileNotFoundException();//exceção de arquivo nao encontrado
            Console.WriteLine("Opening Archive: " + arquivo);
        }

        public string LineReader()
        {
            Console.WriteLine("Reading line...");
            //throw new IOException();
            return "Archive Line";
        }

        public void Close()
        {
            Console.WriteLine("Closing archive.");
        }
        public void Dispose()
        {
            Console.WriteLine("Closing archive.");
        }
    }
}
