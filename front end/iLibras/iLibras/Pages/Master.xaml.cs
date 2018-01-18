using System;
using System.Collections.Generic;

using Xamarin.Forms;
using Rg.Plugins.Popup.Services;

using ImageCircle.Forms.Plugin.Abstractions;
using iLibras.Services;

namespace iLibras.Pages
{

    public partial class Master : ContentPage
    {
        public static Label menuEmailUsuario;
        public static CircleImage menuFotoUser;
        public static Label sairLogin;

        public Master()
        {
            InitializeComponent();
           // btnLogin.Clicked += BtnLogin_Clicked;
            sairLogin = this.FindByName<Label>("SairLogin");
            menuEmailUsuario = this.FindByName<Label>("MenuEmailUsuario");
            menuFotoUser = this.FindByName<CircleImage>("MenuFotoUser");


            if (App.CurrentUserAPP != null &&  !string.IsNullOrEmpty(App.CurrentUserAPP.email_usu))
            {// i have a user
               // btnLogin.IsVisible = false;
                SairLogin.Text = "Fechar Sessão";
                menuEmailUsuario.Text = App.CurrentUserAPP.email_usu;
                string SourceFoto = string.Format("{0}img_users/{1}.jpg"
                    , App.BaseAddressAPIServicesAPP
                    , App.CurrentUserAPP.codfot_usu.ToString()
                );
                menuFotoUser.Source = SourceFoto;
            }
            else {
                menuEmailUsuario.Text = "E-mail usuario";
                SairLogin.Text = "LOGIN";
            }

            if (!App.APPIsConnected)
            {
                DisplayAlert("iLibras", "Não tem inetrnet disponivel.", "Ok");
            }

        }

        private async void BtnLogin_Clicked(object sender, EventArgs e)
        {
            if (SairLogin.Text.Equals("LOGIN"))
            {
                await PopupNavigation.PushAsync(new iLibrasLogin());
            }
            else
            {
                LogOutMethod();
                SairLogin.Text = "LOGIN";
                menuFotoUser.Source = "avatar_black.png";
                menuEmailUsuario.Text = "E-mail usuario";
            }
        }

        private void LogOutMethod()
        {
            DataService dataService;
            dataService = new DataService();
            dataService.DeleteUser(App.CurrentUserAPP);
            App.CurrentUserAPP = new Model.User();

        }

        private void UserPhoto_Clicked(object sender, EventArgs e)
        {

        }

        private void menu_GIFLibras_Tapped(object sender, EventArgs e)
        {
            iLibras.App.MasterDetail.Detail = new NavigationPage(new Detail());

            Detail.DetailPage.CurrentPage = Detail.pageSettings;
            iLibras.App.MasterDetail.IsPresented = false;
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

        private void menu_Tag_Tapped(object sender, EventArgs e)
        {
            iLibras.App.MasterDetail.IsPresented = false;
            //iLibras.App.MasterDetail.Detail = new NavigationPage((Page)Activator.CreateInstance(typeof(iLibrasCadastros)));
            //iLibras.App.MasterDetail.Detail = new NavigationPage((Page)Activator.CreateInstance(typeof(iLibrasTag)));
            //this.Navigation.PushAsync(new iLibrasCadastros());
            //this.Navigation.PushAsync(new iLibrasTag());
            iLibras.App.MasterDetail.Detail = new NavigationPage(new iLibrasTag());
        }


        private void menu_Categoria_Tapped(object sender, EventArgs e)
        {
            iLibras.App.MasterDetail.IsPresented = false;
            iLibras.App.MasterDetail.Detail = new NavigationPage(new iLibrasCategoria());
        }


        private void menu_Estado_Tapped(object sender, EventArgs e)
        {
            iLibras.App.MasterDetail.IsPresented = false;
            iLibras.App.MasterDetail.Detail = new NavigationPage(new iLibrasRegiao());

        }


    }
}
