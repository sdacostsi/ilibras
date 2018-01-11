using iLibras.Data;
using iLibras.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iLibras.Services
{
    public class DataService
    {

        //public Response DeleteUser(Customer user)
        public Response DeleteUser(User user)
        {
            try
            {
                using (var da = new DataAccess())
                {
                    da.Delete(user);
                }
                return new Response
                {
                    IsSuccess = true,
                    Message = "Usario eliminado ok",
                    Result = user,
                };
            }
            catch (Exception ex)
            {
                return new Response
                {
                    IsSuccess = false,
                    Message = ex.Message,

                };
            }

        }


        //public Customer GetUser() {
        public User GetUser()
        {
            // Retorna el usario guardado en la BdD

            using (var da = new DataAccess())
            {
                // return da.First<Customer>(false);
                return da.First<User>(false);

            }
        }

/*
        public Response UpdateUser(Customer user)
        {
            try
            {
                using (var da = new DataAccess())
                {
                    // es la unica tabla que contiene un registro que es elç usario activo
                    var oldUser = da.First<Customer>(false);
                    da.Update(user);
                }
                return new Response
                {
                    IsSuccess = true,
                    Message = "Usario actualizado ok",
                    Result = user,
                };
            }
            catch (Exception ex)
            {
                return new Response
                {
                    IsSuccess = false,
                    Message = ex.Message,
                };
            }
        }
*/
        public Response InsertUser(User user)
        {
            try
            {
                using (var da = new DataAccess())
                {
                    // es la unica tabla que contiene un registro que es el usario activo
                    //var oldUser = da.First<Customer>(false);
                    var oldUser = da.First<User>(false);
                    if (oldUser != null)
                    {
                        da.Delete(oldUser);
                    }
                    da.Insert(user);
                }
                return new Response
                {
                    IsSuccess = true,
                    Message = "Usario insertado ok",
                    Result = user,
                };
            }
            catch (Exception ex)
            {
                return new Response
                {
                    IsSuccess = false,
                    Message = ex.Message,
                };
            }
        }

    }
}
