const Sequelize = require("sequelize")

const Divisiones = (sequelize)=>{
    sequelize.define('division',{
        id:{
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
        },
        logo:{
            type: Sequelize.STRING()
        }
    })
}

module.exports = Divisiones