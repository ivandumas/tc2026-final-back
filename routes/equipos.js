const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const eController = require('../controllers/equipos')

//Servicio para procesar los datos del formulario
router.post('/agregarEquipo',eController.postAgregarEquipo)

//Consulta de equipos
router.get('/obtenerEquipos',eController.getObtenerEquipos)

//Eliminar equipo
router.post('/borrarEquipo', eController.postBorrarEquipo)

//Actualizar equipo
router.post('/acualizarEquipo', eController.postActualizarEquipo)

module.exports = router