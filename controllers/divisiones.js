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
            if (req.body.descripcion.value.length > 9 && req.body.descripcion.value.length < 251) {
            Division.create(req.body)
                .then((result) => {
                    console.log('Division agregado exitosamente')
                    res.json({status: 200, estado: 'aceptado' })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({ estado: 'error' })
                })
            } else {
                console.log('Description must be between 10 and 250 characters')
                res.json({status: 422, codigo: "InvalidBodyException"})
            }
        } else {
            console.log('El registro de este Division ya existe')
            res.json({ estado: 'ya existe' })
        }
    })
}

exports.getObtenerDivisioness = (req, res) => {
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
            id: req.body.id,
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
            nombre: req.body.nombre,
        },
        {
            where: {
                id: req.body.id,
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
