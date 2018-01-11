using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;

namespace iLibras.Droid
{
    [Activity(Theme = "@style/Theme.Splash",
        MainLauncher = true,
        NoHistory = true)]

    public class SplashActivity1 : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            // No tiene un axml asignado, solo carga el estilo y dispara el mainactivity al final
            // https://www.youtube.com/watch?v=SCF9-Q0uyj8
            base.OnCreate(savedInstanceState);

            // Create your application here
            StartActivity(typeof(MainActivity));
        }
    }
}