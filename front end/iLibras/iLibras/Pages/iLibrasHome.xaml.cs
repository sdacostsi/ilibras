using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace iLibras.Pages
{
    public partial class iLibrasHome : MasterDetailPage
    {
        public iLibrasHome()
        {
            InitializeComponent();

            this.Master = new Master();
            this.Detail = new NavigationPage(new Detail());

            iLibras.App.MasterDetail = this;


            if (!App.APPIsConnected)
            {
                DisplayAlert("iLibras", "Não tem inetrnet disponivel.", "Ok");
            }

        }
    }
}
