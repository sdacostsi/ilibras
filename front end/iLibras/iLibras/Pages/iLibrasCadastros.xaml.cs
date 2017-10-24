using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace iLibras.Pages
{
    public partial class iLibrasCadastros : ContentPage
    {
        public iLibrasCadastros()
        {
            InitializeComponent();

            //Delegando os eventos de click
            btnTag.Clicked += async (sender, e) =>
            {
                await this.Navigation.PushAsync(new iLibrasTag());
            };

            btnSinal.Clicked += async (sender, e) =>
            {
                await this.Navigation.PushAsync(new iLibrasSinal());
            };

            btnTermo.Clicked += async (sender, e) =>
            {
                await this.Navigation.PushAsync(new iLibrasTermo());
            };

            btnRegiao.Clicked += async (sender, e) =>
            {
                await this.Navigation.PushAsync(new iLibrasRegiao());
            };

            btnCategoria.Clicked += async (sender, e) =>
            {
                await this.Navigation.PushAsync(new iLibrasCategoria());
            };

            btnLocalizacao.Clicked += async (sender, e) => 
            {
                await this.Navigation.PushAsync(new iLibrasLocalizacao());
            };
        }

        void Handle_Clicked(object sender, System.EventArgs e)
        {
            throw new NotImplementedException();
        }
    }
}
