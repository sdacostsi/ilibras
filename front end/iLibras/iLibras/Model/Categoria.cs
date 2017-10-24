using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json.Linq;

namespace iLibras.Model
{
    public class Categoria
    {
        public int Id { get { return id; } set { id = value; } }
        public string Descricao { get { return descricao; } set { descricao = value; } }

        private int id = 0;
        private string descricao = string.Empty;

        public Categoria() { }

        public Categoria(int id, string descricao)
        {
            this.id = id;
            this.descricao = descricao;
        }

        public Categoria(string descricao) => this.descricao = descricao;

        /// <summary>
        /// Método para registrar nova categoria
        /// </summary>
        /// <returns>RequestAPI com status, reason e sucess </returns>
        public RequestAPI Inserir(string descricao){
            try{
                using(var client = new HttpClient()){
                    client.BaseAddress = new Uri(RequestAPI.URI);
                    var json = new JObject(new JProperty("descricao", descricao));
                    var content = new StringContent(json.ToString(), Encoding.UTF8, "application/json");

                    var response = client.PostAsync("/api/categoria/novo", content).Result;

                    var requestApi = new RequestAPI((int)response.StatusCode, 
                                                    response.ReasonPhrase, response.IsSuccessStatusCode);

                    return requestApi;
                }
            } catch(Exception){
                return null;
            }
        }
    }
}
