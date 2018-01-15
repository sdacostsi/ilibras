function CategoriaDao(connection) {
    this._connection = connection
}

CategoriaDao.prototype.listar = function(callback){
    this._connection.query('select codigo_cat, descri_cat from categoria', callback)
}

CategoriaDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select codigo_cat, descri_cat from categoria where codigo_cat = ?', 
        [codigo], callback)
}

CategoriaDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_cat, descri_cat from categoria where descri_cat = ?', 
        [descricao], callback)
}

CategoriaDao.prototype.salvar = function(categoria, callback){
//    this._connection.query('INSERT INTO ilibras.categoria(descri_cat) VALUES (?)', categoria.descricao, callback)
    this._connection.query('INSERT INTO ilibras.categoria(descri_cat) VALUES (?)', [categoria], callback)
//    this._connection.query('INSERT INTO ilibras.categoria(descri_cat) VALUES (?)', [categoria], callback)
//    this._connection.query('INSERT INTO ilibras.categoria(descri_cat) VALUES ("' + categoria.descricao + '")', categoria.descricao, callback)
//    this._connection.query('INSERT INTO ilibras.categoria(descri_cat) VALUES ("categoriadescricao")', categoria.descricao, callback)
}

CategoriaDao.prototype.deletar = function(categoria, callback){
    this._connection.query('delete from categoria where codigo_cat = ?', [categoria.codigo], callback)
}

module.exports = function(){ return CategoriaDao; };