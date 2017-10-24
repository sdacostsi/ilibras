using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json.Linq;

namespace iLibras.Model
{
    public class Localizacao
    {
        public int Id { get; set;}
        public int IdEndereco { get; set; }
        public string Descricao { get; set; }

        private int id, idEndereco;
        private string descricao;


        public Localizacao() { }

        public Localizacao(int id, string descricao, int idEndereco)
        {
            this.id = id;
            this.descricao = descricao;
            this.idEndereco = idEndereco;
        }

        /// <summary>
        /// Método para registrar nova categoria
        /// </summary>
        /// <returns>RequestAPI com status, reason e sucess </returns>
        public async System.Threading.Tasks.Task<RequestAPI> InserirAsync(string descricao, int idEndereco)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(RequestAPI.URI);
                    var json = new JObject(new JProperty("descricao", descricao),
                                           new JProperty("codigo_endereco", idEndereco));
                    var content = new StringContent(json.ToString(), Encoding.UTF8, "application/json");

                    var response = client.PostAsync("/api/localizacao/novo", content).Result;
                    string responseBody = await response.Content.ReadAsStringAsync();

                    var jsonObject = JObject.Parse(responseBody);

                    var requestApi = new RequestAPI((int)response.StatusCode,
                                                    response.ReasonPhrase, response.IsSuccessStatusCode, jsonObject);

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
