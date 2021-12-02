const path = require('path')
const Equipo = require('../utils/database').models.equipo

exports.postAgregarEquipo = (req, res) => {
    console.log(req.body)
    Equipo.findOne({
        where: {
            nombre: req.body.nombre,
            ultimo_campeonato: req.body.ultimo_campeonato,
        },
    }).then((found) => {
        if (found === null) {
            Equipo.create(req.body)
                .then((result) => {
                    console.log('Equipo agregada exitosamente')
                    res.json({status: 200, estado: 'aceptado' })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({ estado: 'error' })
                })
        } else {
            console.log('El registro de este Equipo ya existe')
            res.json({ estado: 'ya existe' })
        }
    })
}

exports.getObtenerEquipos = (req, res) => {
    Equipo.findAll()
        .then((equipos) => {
            console.log(equipos)
            res.json({status: 200, equipos})
        })
        .catch((err) => {
            console.log(err)
            res.json({status: 500, estado: 'error' })
        })
}

exports.postBorrarEquipo = (req, res) => {
    console.log(req.body)
    Equipo.destroy({
        where: {
            equipoID: req.body.divisionID,
        },
    })
        .then(() => {
            console.log('Equipo eliminado'),
                res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}

exports.postActualizarEquipo = (req, res) => {
    console.log(req.body)
    Equipo.update(
        {
            nombre: req.body.nombre,
            ubicacion: req.body.ubicacion,
            ultimo_campeonato: req.body.ultimo_campeonato,
            campeon_divisional: req.body.campeon_divisional,
            comodin: req.body.comodin,
            primer_lugar: req.body.primer_lugar,
        },
        {
            where: {
                equipoID: req.body.divisionID,
            },
        }
    )
        .then(() => {
            console.log('Equipo actualizada')
            res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}
