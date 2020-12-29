const mySql = require("mysql");

//! Os parametros de conexão são passados em JSON.
//* host -> Endereço do Servidor.
//* user -> Usuário que você cadastrou em seu servidor.
//* password -> Senha que você cadastrou em seu servidor.
//* database -> A database em seu servidor que deseja criar conexão.
module.exports = function () {
  const connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "portal_noticias",
  });

  /*
    ! SOLUÇÃO PARA ERRO DE AUTENTICAÇÃO COM SQL 8
    ? Normalmente irá aparecer que seu server não possui suporte para autenticação e com isso irá forçar erro.
    * A solução é basiicamente uma query no teu console.log, alterando a senha do usuário.
   
   !ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
   !FLUSH PRIVILEGES;

    */

  return connection;
};
