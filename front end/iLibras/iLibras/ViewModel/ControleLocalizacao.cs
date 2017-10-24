using System;
using iLibras.Model;

namespace iLibras.ViewModel
{
    public class ControleLocalizacao
    {
        public Localizacao Localizacao { get; set; }

        public System.Threading.Tasks.Task<RequestAPI> InserirLocalizacao(string descricao, int idEndereco)
        {
            Localizacao = new Localizacao();
            return Localizacao.InserirAsync(descricao, idEndereco);
        }
    }
}
