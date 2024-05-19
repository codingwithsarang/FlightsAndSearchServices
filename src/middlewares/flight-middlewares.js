const {ClientErrorCode} = require('../utils/error_codes')

const validateCreateFlight = (req,res,next)=>{
    const inputBody = req.body
    if(!inputBody.flightNumber || 
        !inputBody.airplaneId || 
        !inputBody.departureAirportId || 
        !inputBody.arrivalAirportId || 
        !inputBody.arrivalTime ||
         !inputBody.departureTime || 
         !inputBody.price){
           return res.status(ClientErrorCode.BAD_REQUEST).json({
                data: {},
                success: false,
                message: 'invalid request body for create flight',
                err: 'missing mandotory details to create a flight'
            })
    }

    next()
}


module.exports = {
    validateCreateFlight
}