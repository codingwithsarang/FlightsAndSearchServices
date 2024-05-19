const express = require('express')
const {CityController,AirportController, FlightController} = require('../../controllers/index')


const router = express.Router()

// city routes
router.post('/city',CityController.create) 
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)
router.post('/multiple',CityController.multipleCreate)

// airport routes
router.post('/airport',AirportController.createAirport )
router.get('/airport/:id',AirportController.getAirport)


//flight routes
router.post('/flights',FlightController.create )
router.get('/flights',FlightController.getAll)



module.exports = router 