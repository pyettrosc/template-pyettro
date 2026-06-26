Module.exports = (sequelize, Datatypes) => {
    const Atividade = sequelize.define('atividade', {
    tipo_atividade:DataTypes.STRING,
    distancia_pecorrida:Datatype.INTEGER,
    duracao_atividade:Datatypes.INTEGER,
    quantidade_calorias:Datatypes.INTEGER,
    usuario_id: Datatypes.INTEGER
    });

return Atividade;

};