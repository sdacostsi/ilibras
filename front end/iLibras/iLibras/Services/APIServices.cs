﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;
using System.Net.Http;


namespace iLibras.Services
{
    public class APIServices
    {

        public async Task<List<T>> Get<T>(string ApiControlerParameter)
        {
            try
            {
                var client = new HttpClient();
                client.BaseAddress = new Uri(App.BaseAddressAPIServicesAPP);

                var url = string.Format("/api/{0}", ApiControlerParameter);
                var response = await client.GetAsync(url);

                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }

                var result = await response.Content.ReadAsStringAsync();

                if (result.ToString().Substring(0, 1).ToString() != "[")
                {
                    result = string.Format("[{0}]", result);
                }

                var JSONresult = JsonConvert.DeserializeObject<List<T>>(result);
                return JSONresult;
            }
            catch (HttpRequestException e)
            {
                return null;
            }
        }

        public async Task<List<T>> Post<T>(string ApiControler, object JSON)
        {
            try
            {
                var request = JsonConvert.SerializeObject(JSON);
                var body = new StringContent(request, Encoding.UTF8, "application/json");
                var client = new HttpClient();
                client.BaseAddress = new Uri(App.BaseAddressAPIServicesAPP);
                var url = string.Format("/api/{0}", ApiControler);
                var response = await client.PostAsync(url, body);

                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }

                var result = await response.Content.ReadAsStringAsync();

                //Standardize an item to a array

                if (result.ToString().Substring(0, 1).ToString() != "[")
                {
                    result = string.Format("[{0}]", result);
                }

                //Standardize only first array
                if (result.ToString().Contains("],{"))
                {
                    var OnlyOne = result.ToString().Split(']')[0];
                    result = OnlyOne.ToString().Replace("[[", "[") + "]";
                }

                var JSONresult = JsonConvert.DeserializeObject<List<T>>(result);
                return JSONresult;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


    }
}
