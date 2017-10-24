using System;
using System.Collections.Generic;
using iLibras.Model;

namespace iLibras.ViewModel
{
    public class ControleEstado
    {
        public Estado Estado { get; private set; }

        /// <summary>
        /// Listar estados em lista de string somente com a unidade federativa.
        /// </summary>
        /// <returns>Lista de estados</returns>
        public async System.Threading.Tasks.Task<List<string>> ListarEstadoStringAsync()
        {
            var estados = await Estado.ListarAsync();
            var descricaoEstados = new List<string>();

            foreach(Estado est in estados)
                descricaoEstados.Add(est.Descricao);        

            return descricaoEstados;
        }
    }
}
