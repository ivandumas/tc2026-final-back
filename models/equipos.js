const Sequelize = require("sequelize")

const Equipo = (sequelize)=>{
    sequelize.define('equipo',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            allowIncrement: true
        },
        nombre:{
            type: Sequelize.STRING(50),
            allowNull:false
        },
        ubicacion:{
            type: Sequelize.STRING(300)
        },
        marca:{
            type: Sequelize.STRING(10)
        },
        ultimo_campeonato:{
            type: Sequelize.INTEGER
        },
        campeon_divisional:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        comodin:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        primer_lugar:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        divisionN:{
            type: Sequelize.INTEGER
        },
        logo:{
            type: Sequelize.STRING()
        }
    })
}

module.exports = Equipo