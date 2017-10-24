using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace iLibras.Pages
{
    public partial class Detail : TabbedPage
    {
        public Detail()
        {
            InitializeComponent();
        }

        void Handle_Clicked(object sender, System.EventArgs e)
        {
            this.Navigation.PushAsync(new iLibrasCadastros());
        }
    }
}
