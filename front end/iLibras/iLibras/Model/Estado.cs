using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json.Linq;

namespace iLibras.Model
{
    public class Estado
    {
        public int Id { get { return id; } private set { id = value; } }
        public string Descricao { get { return descricao; } private set { descricao = value; } }
        public string Abreviacao { get { return abreviacao; } private set { abreviacao = value; } }
        public RequestAPI RequestApi { get; private set; }

        int id;
        string descricao, abreviacao;

        public Estado() {}

        public Estado(int id, string descricao, string abreviacao)
        {
            this.id = id;
            this.descricao = descricao;
            this.abreviacao = abreviacao;
        }

        public static async System.Threading.Tasks.Task<List<Estado>> ListarAsync()
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(RequestAPI.URI);

                    var response = client.GetAsync("/api/estado").Result;
                    string responseBody = await response.Content.ReadAsStringAsync();

                    var jsonArray = JArray.Parse(responseBody);
                    var requestApi = new RequestAPI((int)response.StatusCode,
                                                    response.ReasonPhrase, response.IsSuccessStatusCode);

                    var list = new List<Estado>();
                    foreach(JObject json in jsonArray)
                    {
                        var estado = new Estado();
                        estado.Id = int.Parse(json.GetValue("codigo_est").ToString());
                        estado.Descricao = json.GetValue("descri_est").ToString();
                        estado.Abreviacao = json.GetValue("abrev_est").ToString();

                        list.Add(estado);
                    }

                    return list;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
