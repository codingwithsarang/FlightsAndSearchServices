const {FlightService} = require('../services/index')
const {ClientErrorCode ,SuccessCodes} = require('../utils/error_codes')


const flightService = new FlightService()

const create = async(req,res)=>{
    try {
        let flightRequestBody = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestBody)
        res.status(SuccessCodes.created).json({
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
        res.status(SuccessCodes.ok).json({
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