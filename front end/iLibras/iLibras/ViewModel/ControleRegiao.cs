using System;
using iLibras.Model;

namespace iLibras.ViewModel
{
    public class ControleRegiao
    {
        public Regiao Regiao { get; private set; }

        public RequestAPI InserirRegiao(string descricao)
        {
            Regiao = new Regiao();
            Regiao.Descricao = descricao;
            return Regiao.Inserir(Regiao);
        }
    }
}
