using Newtonsoft.Json;
using SQLite.Net.Attributes;

namespace iLibras.Model
{
    public class User
    {
        [PrimaryKey]
        public int IdClienteTV { get; set; }
        public string IMEI { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Usuario { get; set; }
        public string Clave { get; set; }

        [JsonProperty(PropertyName = "E-Mail")]
        public string Email { get; set; } // boludo E-Mail
        public string Celular { get; set; }
        public string Activo { get; set; }
        public string codigoSeguridad { get; set; }
        public string id_cliente { get; set; }
        public string id_flota { get; set; }
        public string DNI { get; set; }
        public string token_carton { get; set; }
        public string idCustomerMP { get; set; }
        public string alta { get; set; }
        public string key { get; set; }

    }
}
