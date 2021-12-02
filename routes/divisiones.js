const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const dController = require('../controllers/divisiones')

//Servicio para procesar los datos del formulario
router.post('/agregarDivision',dController.postAgregarDivision)

//Consulta de divisiones
router.get('/obtenerDivisiones',dController.getObtenerDivisiones)

//Eliminar division
router.post('/borrarDivision', dController.postBorrarDivision)

//Actualizar division
router.post('/acualizarDivision', dController.postActualizarDivision)

module.exports = router