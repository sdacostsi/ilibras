using System;
using System.Collections.Generic;
using iLibras.ViewModel;
using Xamarin.Forms;

namespace iLibras.Pages
{
    public partial class iLibrasCategoria : ContentPage
    {
        public iLibrasCategoria()
        {
            InitializeComponent();
        }

        void btnCadastrar_clicked(object sender, System.EventArgs e)
        {
            if (!ValidarCamposObrigatorios())
                return;

            var requestApi = new ControleCategoria().InserirCategoria(ecDescricao.Text);

            if(requestApi.StatusResponse){
                DisplayAlert("", "Registro realizado com sucesso", "OK");
            } else if(requestApi.CodeResponse == 409){
                DisplayAlert("", "Já existe uma categoria com está descrição", "Ok");
            } else {
                DisplayAlert("", "Não foi possível finalizar o registro", "Ok");
            }
        }

        bool ValidarCamposObrigatorios(){
            var camposPreencher = new List<string>();

            if (string.IsNullOrWhiteSpace(ecDescricao.Text))
                camposPreencher.Add("Descrição");


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
