using Xamarin.Forms;
using iLibras.Pages;
using System.Threading.Tasks;
using Plugin.Connectivity;
using Plugin.Connectivity.Abstractions;
using iLibras.Model;
using iLibras.Services;

namespace iLibras
{
    public partial class App : Application
    {
        public static MasterDetailPage MasterDetail { get; set; }

        DataService _DataService;

        public static string BaseAddressAPIServicesAPP { get; set; }

        public static bool APPIsConnected { get; set; }

        public static User CurrentUserAPP;


        public App()
        {
            InitializeComponent();
            CurrentUserAPP = new User();
            BaseAddressAPIServicesAPP = "http://35.160.42.82:3000/";


            // valido que exista un usario para entrar directo al home
            _DataService = new DataService();
            var UserActivo = _DataService.GetUser();
            if (UserActivo != null) {
                CurrentUserAPP = UserActivo;
            }

            //Network conection
            CrossConnectivity.Current.ConnectivityChanged += HandleConnectivityChanged;
            if (!CrossConnectivity.Current.IsConnected)
            {
                APPIsConnected = false;
            }
            else
            {
                APPIsConnected = true;
            }

            MainPage = new iLibrasHome();
        }

        public async static Task NavigateMasterDetail(Page page)
        {
            App.MasterDetail.IsPresented = false;
            await MasterDetail.Detail.Navigation.PushAsync(page);
        }

        void HandleConnectivityChanged(object sender, ConnectivityChangedEventArgs e)
        {
            APPIsConnected = e.IsConnected;
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
