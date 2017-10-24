function UsuarioDao(connection) {
    this._connection = connection
}

UsuarioDao.prototype.listar = function(callback){
    this._connection.query('select codigo_usu, email_usu, nome_usu, datnasc_usu, fone_usu, codend_usu, codper_usu, codfot_usu from usuario', 
        callback)
}

UsuarioDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select email_usu, nome_usu, datnasc_usu, fone_usu, codend_usu, codper_fun, codfot_fun from usuario where codigo_usu = ?', 
        [codigo], callback)
}

UsuarioDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_usu, email_usu, nome_usu, datnasc_usu, fone_usu, codend_usu, codper_usu, codfot_usu from usuario where email_usu = ?', 
        [descricao], callback)
}

UsuarioDao.prototype.salvar = function(usuario, callback){
    this._connection.query('INSERT INTO usuario(email_usu, senha_usu, nome_usu, datnasc_usu, fone_usu, codend_usu, codper_usu, codfot_usu) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [usuario.email, usuario.senha, usuario.nome, usuario.data_nascimento, usuario.telefone, usuario.codigo_endereco, usuario.codigo_perfil, usuario.codigo_foto],
        callback)
}

UsuarioDao.prototype.deletar = function(usuario, callback){
    this._connection.query('delete from usuario where codigo_usu = ?', 
        [usuario.codigo], callback)
}

module.exports = function(){ return UsuarioDao; };