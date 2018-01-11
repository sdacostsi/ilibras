using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SQLite.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using Xamarin.Forms;
using iLibras.Interfaces;
using iLibras.Model;

namespace iLibras.Data
{
    public class DataAccess : IDisposable
    {
        private SQLiteConnection connection;

        public DataAccess()
        {
            var config = DependencyService.Get<IConfig>();
            connection = new SQLiteConnection(config.Platform,
                System.IO.Path.Combine(config.DirectoryDB, "BdD.db3"));
//            connection.CreateTable<Customer>();// Customer data *************** vr unificar con User
            connection.CreateTable<User>();// User data
//            connection.CreateTable<TravelsHistory>();// Travels History
//            connection.CreateTable<MessageCancelTravel>();// Travels History
//            connection.CreateTable<MessageToDriver>();// Travels History
//            connection.CreateTable<CardChan>();// Additional card data for model card mp, no use them to post to mp
        }

        public void DeleteAll<T>(T model)
        {
            connection.DeleteAll<T>();
        }

/*
        public void InsertAllProducts(List<TravelsHistory> T)
        {
            connection.InsertAll(T);
        }


        public void InsertAllMessageCancelTravel(List<MessageCancelTravel> T)
        {
            connection.InsertAll(T);
        }

        public void InsertAllMessageToDriver(List<MessageToDriver> T)
        {
            connection.InsertAll(T);
        }
*/


        public void Insert<T>(T model)
        {
            connection.Insert(model);
        }

        public void Update<T>(T model)
        {
            connection.Update(model);
        }

        public void Delete<T>(T model)
        {
            connection.Delete(model);
        }

        public T First<T>(bool WithChildren) where T : class
        {
            // NO PUDE IMPORTAR SQLiteExtensions GetAllWithChildren
            /*
            if (WithChildren)
            {
                return connection.GetAllWithChildren<T>().FirstOrDefault();
            }
            else
            {
                return connection.Table<T>().FirstOrDefault();
            }
            */

            return connection.Table<T>().FirstOrDefault();


        }

        public List<T> GetList<T>(bool WithChildren) where T : class
        {
            // NO PUDE IMPORTAR SQLiteExtensions GetAllWithChildren
            /*

            if (WithChildren)
            {
                return connection.GetAllWithChildren<T>().ToList();
            }
            else
            {
                return connection.Table<T>().ToList();
            }
            */
            return connection.Table<T>().ToList();

        }

        public T Find<T>(int pk, bool WithChildren) where T : class
        {
            // NO PUDE IMPORTAR SQLiteExtensions GetAllWithChildren
            /*
            if (WithChildren)
            {
                return connection.GetAllWithChildren<T>().FirstOrDefault(m => m.GetHashCode() == pk);
            }
            else
            {
                return connection.Table<T>().FirstOrDefault(m => m.GetHashCode() == pk);
            }
            */
            return connection.Table<T>().FirstOrDefault(m => m.GetHashCode() == pk);

        }

        public void Dispose()
        {
            connection.Dispose();
        }
    }
}
