using System;
using System.Collections.Generic;

using Xamarin.Forms;
using Rg.Plugins.Popup.Services;

namespace iLibras.Pages
{
    public partial class Master : ContentPage
    {
        public Master()
        {
            InitializeComponent();
            btnLogin.Clicked += BtnLogin_Clicked;
        }

        private async void BtnLogin_Clicked(object sender, EventArgs e)
        {
            await PopupNavigation.PushAsync(new iLibrasLogin());
        }

        private void UserPhoto_Clicked(object sender, EventArgs e)
        {

        }

        private void menu_GIFLibras_Tapped(object sender, EventArgs e)
        {
            DisplayAlert("titu","GIFLibras","Ok");
        }

        private void menu_Contexto_Tapped(object sender, EventArgs e)
        {
            DisplayAlert("tit", "Contexto", "Ok");
        }

        private void menu_ImgRepresent_Tapped(object sender, EventArgs e)
        {
            DisplayAlert("tit", "Img Representativa", "Ok");
        }

        
        private void menu_EscritaSinais_Tapped(object sender, EventArgs e)
        {
            DisplayAlert("tit", "Escrita de Sinais", "Ok");
        }


        private void menu_iLibrasExplica_Tapped(object sender, EventArgs e)
        {
            DisplayAlert("tit", "iLibras Explica", "Ok");
        }

        


    }
}
