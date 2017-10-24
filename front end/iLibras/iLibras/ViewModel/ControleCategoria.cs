using System;
using System.ComponentModel;
using System.Windows.Input;
using Xamarin.Forms;
using iLibras.Model;

namespace iLibras.ViewModel
{
    public class ControleCategoria
    {
        public Categoria Categoria { get; private set; }

        public RequestAPI InserirCategoria(string descricao){
            Categoria = new Categoria(0, descricao);
            return Categoria.Inserir(descricao);
        }
    }
}
