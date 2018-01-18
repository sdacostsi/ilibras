using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace iLibras.Pages
{
    public partial class iLibrasHome : MasterDetailPage
    {
        public static MasterDetailPage masterDetailPage;

        public iLibrasHome()
        {
            InitializeComponent();

            this.Master = new Master();
            this.Detail = new NavigationPage(new Detail());
            this.IsPresented = false;
            iLibras.App.MasterDetail  = this;

            if (!App.APPIsConnected)
            {
                DisplayAlert("iLibras", "Não tem inetrnet disponivel.", "Ok");
            }

        }
    }
}
