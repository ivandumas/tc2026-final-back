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
        ultimo_campeoneato:{
            type: Sequelize.INTEGER
        },
        campeon_divisional:{
            type: Sequelize.BOOLEAN = false //Pendiente no sabemos como predefinirlos en false
        },
        comodin:{
            type: Sequelize.BOOLEAN = false //Pendiente no sabemos como predefinirlos en false
        },
        primer_lugar:{
            type: Sequelize.BOOLEAN = false //Pendiente no sabemos como predefinirlos en false
        },
        division:{
            type: Sequelize.INTEGER
        }
    })
}

module.exports = Equipo