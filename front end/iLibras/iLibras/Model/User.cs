using Newtonsoft.Json;
using SQLite.Net.Attributes;
using System;

namespace iLibras.Model
{
    public class User
    {
        [PrimaryKey]
        public int codigo_usu { get; set; }
        public string email_usu { get; set; }
        public string nome_usu { get; set; }
        public DateTime datnasc_usu { get; set; }
        public string fone_usu { get; set; }
        public int codend_usu { get; set; }
        public string codper_usu { get; set; }
        public int codfot_usu { get; set; }



    }
}
