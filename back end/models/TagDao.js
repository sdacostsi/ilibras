function TagDao(connection) {
    this._connection = connection
}

TagDao.prototype.listar = function(callback){
    this._connection.query('select codigo_tag, descri_tag, codcat_tag from tag', 
        callback)
}

TagDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select descri_tag, codcat_tag from tag where codigo_tag = ?', 
        [codigo], callback)
}

TagDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_tag, descri_tag, codcat_tag from tag where descri_tag = ?', 
        [descricao], callback)
}

TagDao.prototype.salvar = function(tag, callback){
    this._connection.query('INSERT INTO tag(descri_tag, codcat_tag) VALUES (?, ?)', 
        [tag.descricao, tag.codigo_categoria], callback)
}

TagDao.prototype.deletar = function(tag, callback){
    this._connection.query('delete from tag where codigo_sig = ?', 
        [tag.codigo], callback)
}

module.exports = function(){ return TagDao; };