const {FlightService} = require('../services/index')

const flightService = new FlightService()

const create = async(req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body)
        res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            error: {}
        })
    } catch (error) {
        console.log('something went wrong on controller layer')
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            error: error
        })
    }
}

const getAll = async(req,res)=>{
    try {
        const flights = await flightService.getAllFlights(req.query)
        res.status(200).json({
            data: flights,
            success: true,
            message: 'Successfully fetched the flights',
            error: {}
        })
    } catch (error) {
        console.log('something went wrong on controller layer')
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to flight a city',
            error: error
        })
    }
}

module.exports = {
    create, 
    getAll
}