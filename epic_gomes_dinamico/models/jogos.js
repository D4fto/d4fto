const { model, DataTypes } = require('sequelize')
class Jogos extends Model {
    static init(sequelize){
        super.init({
            id_jogos: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            desconto: DataTypes.DOUBLE,
            data_lancamento: DataTypes.DATE,
            desenvolvedor: DataTypes.STRING,
        }, {sequelize})
    }
    static associate(models) {
            this.belongsTo(models.Status, { foreignKey: 'status_id_status', as: 'status'})
    }
}

module.exports = Jogos;