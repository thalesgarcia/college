using System.Collections.Generic;
using System.Linq;

namespace LeilaoOnline.Core
{
    public enum LeilaoStatus { andamento, finalizado, antesPregao }
    public class Leilao
    {
        private IList<Lance> _lances;
        private string v;
        private double valorDestino;

        public IEnumerable<Lance> Lances => _lances;
        public string Peca { get; }
        public Lance Ganhador { get; private set; }
        public LeilaoStatus status { get; private set; }
        public IModalidadeAvaliacao Avaliador { get; }
        public Interessada ultimoCliente { get; set; }
        public double ValorDestino { get; }

        public Leilao(string peca, IModalidadeAvaliacao avaliador)
        {
            Peca = peca;
            _lances = new List<Lance>();
            status = LeilaoStatus.antesPregao;
            Avaliador = avaliador;
        }
        public Leilao(string peca)
        {
            Peca = peca;
            _lances = new List<Lance>();
            status = LeilaoStatus.antesPregao;
        }


        public void RecebeLance(Interessada cliente, double valor)
        {
            if (status == LeilaoStatus.andamento)
            {
                if (cliente != ultimoCliente)
                {
                    _lances.Add(new Lance(cliente, valor));
                    ultimoCliente = cliente;
                }
            }
        }

        public void IniciaPregao()
        {
            status = LeilaoStatus.andamento;
        }
        public void TerminaPregao()
        {
            if (status != LeilaoStatus.andamento)
            {
                throw new System.InvalidOperationException();
            }
            //if (ValorDestino > 0)
            //{
            //    Ganhador = Lances
            //     .DefaultIfEmpty(new Lance(null, 0))
            //     .Where(l => l.Valor > ValorDestino)
            //     .OrderBy(l => l.Valor)
            //     .FirstOrDefault();
            //}
            //else
            //{
            //    Ganhador = Lances.
            //                   DefaultIfEmpty(new Lance(null, 0)).
            //                   OrderBy(l => l.Valor).
            //                   LastOrDefault();
            //}
            Ganhador = Avaliador.Avalia(this);
            
            status = LeilaoStatus.finalizado;
        }
    }
}
