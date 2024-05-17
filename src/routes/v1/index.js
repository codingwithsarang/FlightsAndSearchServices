const express = require('express')
const CityController = require('../../controllers/City-Controller')
const AirportController = require('../../controllers/Airport-Controller')

const router = express.Router()

router.post('/city',CityController.create) 
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)
router.post('/multiple',CityController.multipleCreate)

router.post('/airport',AirportController.createAirport )
router.get('/airport/:id',AirportController.getAirport)
router.patch('/airport/:id',AirportController.updateAirport)
router.delete('/airport/:id',AirportController.deleteAirport)
router.get('/airportbycity/:id',AirportController.getAirportByCity)

module.exports = router 