const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('usuario', {
    nome: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      unique: true 
    },
    nome_usuario: DataTypes.STRING,
    imagem: DataTypes.STRING,
    senha: DataTypes.STRING, 
  });

  return User;
};
