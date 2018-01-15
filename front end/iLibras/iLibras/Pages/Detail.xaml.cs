using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace iLibras.Pages
{
    public partial class Detail : TabbedPage
    {
        string _UrlGIF;
        public Detail()
        {
            InitializeComponent();
            _UrlGIF = "https://api.detaxi.net:2500/img/motoristas/panico.gif";
            btnChangeGif.Clicked += BtnChangeGif_Clicked;


            if (!App.APPIsConnected)
            {
                DisplayAlert("iLibras", "Não tem inetrnet disponivel.", "Ok");
            }

        }

        private void BtnChangeGif_Clicked(object sender, EventArgs e)
        {
            if (_UrlGIF.Equals("https://api.detaxi.net:2500/img/motoristas/panico.gif"))
            {
                _UrlGIF = "https://api.detaxi.net:2500/img/motoristas/load.gif";
            }
            else
            {
                _UrlGIF = "https://api.detaxi.net:2500/img/motoristas/panico.gif";
            }
            WebViewGIF.Source = _UrlGIF;
        }

        void Handle_Clicked(object sender, System.EventArgs e)
        {
            this.Navigation.PushAsync(new iLibrasCadastros());
        }

    }
}
