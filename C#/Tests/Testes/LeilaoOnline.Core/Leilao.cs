using System.Collections.Generic;
using System.Linq;

namespace LeilaoOnline.Core
{
    public enum LeilaoStatus { andamento, finalizado }
    public class Leilao
    {
        private IList<Lance> _lances;
        public IEnumerable<Lance> Lances => _lances;
        public string Peca { get; }
        public Lance Ganhador { get; private set; }
        public LeilaoStatus status { get; private set; }


        public Leilao(string peca)
        {
            Peca = peca;
            _lances = new List<Lance>();
            status = LeilaoStatus.andamento;
        }

        public void RecebeLance(Interessada cliente, double valor)
        {
            if(status == LeilaoStatus.andamento)
            {
                _lances.Add(new Lance(cliente, valor));

            }
        }

        public void IniciaPregao()
        {

        }
        public void TerminaPregao()
        {
            Ganhador = Lances.
                DefaultIfEmpty(new Lance(null,0)).
                OrderBy(l=>l.Valor).
                LastOrDefault();
            status = LeilaoStatus.finalizado;
        }
    }
}
