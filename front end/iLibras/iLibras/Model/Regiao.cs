using System;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json.Linq;

namespace iLibras.Model
{
    public class Regiao
    {
        public int Id { get { return id; } set { id = value; } }
        public string Descricao { get { return descricao; } set { descricao = value; } }

        int id;
        string descricao;

        public Regiao() { }

        public Regiao(int id, string descricao)
        {
            this.id = id;
            this.descricao = descricao;
        }

        public RequestAPI Inserir(Regiao regiao)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(RequestAPI.URI);
                    var json = new JObject( new JProperty("descricao", descricao));
                    var content = new StringContent(json.ToString(), Encoding.UTF8, "application/json");

                    var response = client.PostAsync("/api/regiao/novo", content).Result;

                    var requestApi = new RequestAPI((int)response.StatusCode,
                                                    response.ReasonPhrase, response.IsSuccessStatusCode);

                    return requestApi;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
