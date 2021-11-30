function applyRelationship(sequelize) {
    //imprimir los modelos adheridos al objeto de con
    console.log(sequelize.models)
    const Torneo = sequelize.models.torneo
    const Equipo = sequelize.models.equipo

    Torneo.hasMany(Equipo, {foreignKey: 'equipoId'});
    Equipo.belongsTo(Torneo);
}


module.exports = {applyRelationship}