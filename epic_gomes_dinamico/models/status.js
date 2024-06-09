const { model, DataTypes } = require('sequelize')
class Status extends Model {
    static init(sequelize){
        super.init({
            id_status: DataTypes.INTEGER,
            nome_status: DataTypes.STRING  
        }, {sequelize})
    }
    static associate(models) {
        this.hasMany(models.Status, { foreignKey: 'status_id_status', as: 'usuario'})
    }
}

module.exports = Status;