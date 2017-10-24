using System;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json.Linq;

namespace iLibras.Model
{
    public class Endereco
    {
        public int Id { get { return id; } set { id = value; } }
        public string Logradouro { get { return logradouro; } set { logradouro = value; } }
        public string Bairro { get { return bairro; } set { bairro = value; } }
        public string Complemento { get { return complemento; } set { complemento = value; } }
        public string Cidade { get { return cidade; } set { cidade = value; } }
        public int IdEstado { get { return idEstado; } set { idEstado = value; } }

        int id, idEstado;
        string logradouro, bairro, complemento, cidade;

        public Endereco() { }

        public Endereco(int id, string logradouro, string bairro, 
                        string complemento, string cidade, int idEstado)
        {
            Id = id;
            Logradouro = logradouro;
            Bairro = bairro;
            Complemento = complemento;
            Cidade = cidade;
            IdEstado = idEstado;
        }

        public async System.Threading.Tasks.Task<RequestAPI> InserirAsync(string logradouro, string bairro,
                                  string complemento, string cidade, int idEstado)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(RequestAPI.URI);
                    var json = new JObject(new JProperty("logradouro", logradouro),
                                           new JProperty("bairro", bairro),
                                           new JProperty("complemento", complemento),
                                           new JProperty("cidade", cidade),
                                           new JProperty("codigo_estado", idEstado));
                    var content = new StringContent(json.ToString(), Encoding.UTF8, "application/json");

                    var response = client.PostAsync("/api/endereco/novo", content).Result;
                    string responseBody = await response.Content.ReadAsStringAsync();
                    var jsonEndereco = JObject.Parse(responseBody);
                    var requestApi = new RequestAPI((int)response.StatusCode, response.ReasonPhrase, 
                                                    response.IsSuccessStatusCode, jsonEndereco);

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
