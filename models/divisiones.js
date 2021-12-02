const Sequelize = require("sequelize")

const Divisiones = (sequelize)=>{
    sequelize.define('division',{
            divisionID:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            allowIncrement: true
        },
        liga:{
            type: Sequelize.STRING(15)
        },
        region:{
            type: Sequelize.STRING(15)
        }
    })
}

module.exports = Divisiones