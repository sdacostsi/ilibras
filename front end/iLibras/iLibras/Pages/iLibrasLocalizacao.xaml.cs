using System;
using System.Collections.Generic;
using iLibras.ViewModel;
using Xamarin.Forms;

namespace iLibras.Pages
{
    public partial class iLibrasLocalizacao : ContentPage
    {
        public iLibrasLocalizacao()
        {
            InitializeComponent();

            PovoarPickerEstadoAsync();
        }

        void btnCadastrar_Clicked(object sender, System.EventArgs e)
        {
            if (!ValidarCamposObrigatorios())
                return;


        }

        /// <summary>
        /// Método responsável por inserir os estados no picker
        /// </summary>
        private async void PovoarPickerEstadoAsync()
        {
            var controleEstado = new ControleEstado();
            var estados = await controleEstado.ListarEstadoStringAsync();

            foreach (string estado in estados)
                pckEstado.Items.Add(estado);
        }

        bool ValidarCamposObrigatorios()
        {
            var camposPreencher = new List<string>();

            if (string.IsNullOrWhiteSpace(ecDescricao.Text))
                camposPreencher.Add("Descrição");

            if (string.IsNullOrWhiteSpace(ecLogradouro.Text))
                camposPreencher.Add("Logradouro");

            if (string.IsNullOrWhiteSpace(ecBairro.Text))
                camposPreencher.Add("Bairro");

            if (string.IsNullOrWhiteSpace(ecNumero.Text))
                camposPreencher.Add("Número");

            if (string.IsNullOrWhiteSpace(ecCidade.Text))
                camposPreencher.Add("Cidade");

            if (string.IsNullOrWhiteSpace(pckEstado.Items[pckEstado.SelectedIndex]))
                camposPreencher.Add("Estado");

            if (camposPreencher.Count > 0)
            {
                var campos = string.Empty;

                for (var i = 0; i < camposPreencher.Count; i++)
                {
                    if (i == 0)
                        campos = string.Format("\"{0}\"", camposPreencher[i]);
                    else
                        campos += string.Format(", \"{0}\"", camposPreencher[i]);
                }

                DisplayAlert("Campo obrigatório não informado", string.Format("É necessário preencher {0}", campos), "Ok");
                return false;
            }

            return true;
        }
    }
}
