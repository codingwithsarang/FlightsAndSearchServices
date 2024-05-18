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
            message: 'Not able to flight a city',
            error: error
        })
    }
}

module.exports = {
    create
}