using Xamarin.Forms;
using iLibras.Pages;
using System.Threading.Tasks;

namespace iLibras
{
    public partial class App : Application
    {
        public static MasterDetailPage MasterDetail { get; set; }

        public App()
        {
            InitializeComponent();

            MainPage = new iLibrasHome();
        }

        public async static Task NavigateMasterDetail(Page page)
        {
            App.MasterDetail.IsPresented = false;
            await MasterDetail.Detail.Navigation.PushAsync(page);
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
