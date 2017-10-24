using System;
using Newtonsoft.Json.Linq;

namespace iLibras.Model
{
    public class RequestAPI
    {
        public static string URI { get { return "http://localhost:3000"; } }

        public int CodeResponse { get { return codeResponse; } set { codeResponse = value; } }
        public string Response { get { return response; } set { response = value; } }
        public bool StatusResponse { get { return statusResponse; } set { statusResponse = value; }}
        public JObject Json { get; set; }

        int codeResponse;
        string response;
        bool statusResponse;
        JObject json;

        public RequestAPI() { }

        public RequestAPI(int codeResponse, string response, bool statusResponse)
        {
            this.codeResponse = codeResponse;
            this.response = response;
            this.statusResponse = statusResponse;
        }

        public RequestAPI(int codeResponse, string response, bool statusResponse, JObject json)
        {
            this.codeResponse = codeResponse;
            this.response = response;
            this.statusResponse = statusResponse;
            this.json = json;
        }
    }
}
