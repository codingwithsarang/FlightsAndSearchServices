const {FlightRepository,AirplaneRepository} = require('../repository/index')
const {compareTime} = require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository()
        this.flightRepository = new FlightRepository()
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: "Arrival time cannot be less than departure time"}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity})
            return flight
        } catch (error) {
            console.log('something went wrong on service layer')
            console.log(error)
            throw {error}
        }
    }
    async getAllFlights(data){
        try {
            const flights = await this.flightRepository.getAllFlights(data)
            return flights
        } catch (error) {
            console.log('something went wrong on service layer')
            console.log(error)
            throw {error}
        }
    }
}

module.exports = FlightService