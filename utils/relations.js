function applyRelationship(sequelize) {
    //imprimir los modelos adheridos al objeto de con
    console.log(sequelize.models)
    const Division = sequelize.models.division
    const Equipo = sequelize.models.equipo

    Division.hasMany(Equipo, {foreignKey: 'divisionID', sourceKey: 'equipoID'});
    Equipo.belongsTo(Division, {foreignKey: 'divisionID', targetKey: 'equipoID'});
}


module.exports = {applyRelationship}