function SinalDao(connection) {
    this._connection = connection
}

SinalDao.prototype.listar = function(callback){
    this._connection.query('select codigo_sin, descri_sin, confmao_sin, expres_sin, orient_sin, ponart_sin, comvid_sin, codter_sin, codloc_sin from sinal', 
        callback)
}

SinalDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select descri_sin, confmao_sin, expres_sin, orient_sin, ponart_sin, comvid_sin, codter_sin, codloc_sin from sinal where codigo_sin = ?', 
        [codigo], callback)
}

SinalDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select descri_sin, confmao_sin, expres_sin, orient_sin, ponart_sin, comvid_sin, codter_sin, codloc_sin from sinal where descri_sin = ?', 
        [descricao], callback)
}

SinalDao.prototype.salvar = function(sinal, callback){
    this._connection.query('INSERT INTO sinal(descri_sin, confmao_sin, expres_sin, orient_sin, ponart_sin, comvid_sin, codter_sin, codloc_sin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [sinal.descricao, sinal.confmao, sinal.expressao, sinal.ponto_articulacao, sinal.comvid, sinal.codigo_termo, sinal.codigo_localizacao], callback)
}

SinalDao.prototype.deletar = function(sinal, callback){
    this._connection.query('delete from sinal where codigo_sig = ?', 
        [sinal.codigo], callback)
}

module.exports = function(){ return SinalDao; };