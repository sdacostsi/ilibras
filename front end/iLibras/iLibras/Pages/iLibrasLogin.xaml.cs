using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Rg.Plugins.Popup.Pages;
using Rg.Plugins.Popup.Services;
using iLibras.Services;
using iLibras.Model;

namespace iLibras.Pages
{
   // [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class iLibrasLogin : PopupPage
    {

        string Password;
        string UserEmail;
        private DataService dataService;


        public iLibrasLogin()
        {
            InitializeComponent();
            dataService = new DataService();
            EntrySenha.Completed += EntrySenha_Completed;

        }

        private void Login_Clicked(object sender, EventArgs e)
        {
            // if it is here is that it does not have a saved user and needs internet to log in
            if (App.APPIsConnected)
            {
            }
            else
            {
                DisplayAlert("Atenncão", "Não tem usuário cadastrado e o dispositivo no esta conectado a internet. Desja habilitar internet ahora para poder ingresar?", "Ok");
                return;
            }

            UserEmail = EntryUsuario.Text.ToString();
            Password = EntrySenha.Text.ToString();
            // valid data
            if (string.IsNullOrEmpty(UserEmail))
            {
                ShowMessage("iLibras", "O usuário no é válido");
                return;
            }

            if (string.IsNullOrEmpty(Password))
            {
                ShowMessage("iLibras", "A senha não é válida");
                return;
            }

            BtnLogIn.IsVisible = false;
            BtnNewAccount.IsVisible = false;
            GetMyUser();
        }

        public async void GetMyUser()
        {
            GetUser.IsVisible = true;
            GetUser.IsRunning = true;

            await DisplayAlert("Login ", "Codigo de login aqui", "Aceptar");

            GetUser.IsVisible = false;
            GetUser.IsRunning = false;
            BtnLogIn.IsVisible = true;
            BtnNewAccount.IsVisible = true;

        }


        public async void ShowMessage(string Title, string message)
        {
            await DisplayAlert(Title, message, "Aceptar");
        }

        private void BtnNewAccount_Clicked(object sender, EventArgs e)
        {
             DisplayAlert("Novo usuario", "Se vai ter a função para criar usarios, aqui chama a tela para para cadastrar os dados dele.", "Aceptar");

//            Navigation.PushModalAsync(new NewUserPage());
            return;
        }

        private void ShowKey_Tapped(object sender, EventArgs e)
        {
            if (EntrySenha.IsPassword)
            {
                EntrySenha.IsPassword = false;
                ImgChechPayShowKey.Source = "checkOn.png";
            }
            else
            {
                EntrySenha.IsPassword = true;
                ImgChechPayShowKey.Source = "checkOff.png";
            }
        }

        private async void RetriveKey_Tapped(object sender, EventArgs e)
        {

            ShowMessage("Esqueci a senha", "Se vai ter esta função adicionar aqui o codigo para isso.");
            return;

        }


        private void EntryUsuario_Unfocused(object sender, FocusEventArgs e)
        {
            Device.BeginInvokeOnMainThread(() => {
                EntrySenha.Focus();
            });
        }

        private void EntrySenha_Completed(object sender, EventArgs e)
        {
            if (!App.APPIsConnected)
            {
                return;
            }

            UserEmail = EntryUsuario.Text.ToString();
            Password = EntrySenha.Text.ToString();
            // valid data
            if (string.IsNullOrEmpty(UserEmail))
            {
                return;
            }

            if (string.IsNullOrEmpty(Password))
            {
                return;
            }
            BtnLogIn.IsVisible = false;
            BtnNewAccount.IsVisible = false;

            GetMyUser();

        }

    }
}