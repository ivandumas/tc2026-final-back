const path = require('path')
const Division = require('../utils/database').models.division

exports.postAgregarDivision = (req, res) => {
    console.log(req.body)
    Division.findOne({
        where: {
            nombre: req.body.nombre,
            ubicacion: req.body.ubicacion,
        },
    }).then((found) => {
        if (found === null) {
            Division.create(req.body)
                .then((result) => {
                    console.log('Division agregada exitosamente')
                    res.json({status: 200, estado: 'aceptado' })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({ estado: 'error' })
                })
        } else {
            console.log('El registro de este Division ya existe')
            res.json({ estado: 'ya existe' })
        }
    })
}

exports.getObtenerDivisiones = (req, res) => {
    Division.findAll()
        .then((divisiones) => {
            console.log(divisiones)
            res.json({status: 200, divisiones})
        })
        .catch((err) => {
            console.log(err)
            res.json({status: 500, estado: 'error' })
        })
}

exports.postBorrarDivision = (req, res) => {
    console.log(req.body)
    Division.destroy({
        where: {
            divisionID: req.body.divisionID,
        },
    })
        .then(() => {
            console.log('Division eliminado'),
                res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}

exports.postActualizarDivision = (req, res) => {
    console.log(req.body)
    Division.update(
        {
            region: req.body.region,
        },
        {
            where: {
                divisionID: req.body.divisionID,
            },
        }
    )
        .then(() => {
            console.log('Division actualizada')
            res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}
