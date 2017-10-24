function TermoDao(connection) {
    this._connection = connection
}

TermoDao.prototype.listar = function(callback){
    this._connection.query('select codigo_ter, descri_ter, codcat_ter, codtag_ter from termo', 
        callback)
}

TermoDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select descri_ter, codcat_ter, codtag_ter from termo where codigo_ter = ?', 
        [codigo], callback)
}

TermoDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_ter, descri_ter, codcat_ter, codtag_ter from termo where descri_ter = ?', 
        [descricao], callback)
}

TermoDao.prototype.salvar = function(termo, callback){
    this._connection.query('INSERT INTO termo(descri_ter, codcat_ter, codtag_ter) VALUES (?, ?, ?)', 
        [termo.descricao, termo.codigo_categoria, termo.codigo_tag], callback)
}

TermoDao.prototype.deletar = function(termo, callback){
    this._connection.query('delete from termo where codigo_ter = ?', 
        [termo.codigo], callback)
}

module.exports = function(){ return TermoDao; };