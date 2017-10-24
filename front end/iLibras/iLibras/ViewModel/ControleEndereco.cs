using System;
using iLibras.Model;

namespace iLibras.ViewModel
{
    public class ControleEndereco
    {
        public Localizacao Localizacao { get; set; }

        public System.Threading.Tasks.Task<RequestAPI> InserirEndereco(string descricao, int idEndereco)
        {
            Localizacao = new Localizacao();
            return Localizacao.InserirAsync(descricao, idEndereco);
        }
    }
}
