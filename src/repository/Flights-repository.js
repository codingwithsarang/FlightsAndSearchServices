const { Op } = require('sequelize')
const {Flights} = require('../models/index')


class FlightRepository{
    
    #createFilter(data){
        let filter = {}
        if(data.arrivalAirportId ){
            filter.arrivalAirportId = data.arrivalAirportId
        } 
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId
        }
       
        let priceFilter = []
        
        if(data.minPrice){
            priceFilter.push({price: {[Op.gte]: data.minPrice}})
        }
        if(data.maxPrice){
            priceFilter.push({price: {[Op.lte]: data.maxPrice}})
        }
        Object.assign(filter, {[Op.and]: priceFilter})
        return filter
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data)
            return flight
        } catch (error) {
            console.log('something went wrong in the  repository layer')
            throw {error}
        }
    }
    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId)
            return flight;
        } catch (error) {
            console.log('something went wrong in the  repository layer')
            throw {error}
        }
    }
    async getAllFlights(filter){
        try {
            const filterObj = this.#createFilter(filter)
            const flights = await Flights.findAll({
                where: filterObj
            })
            return flights;
        } catch (error) {
            console.log('something went wrong in the  repository layer')
            throw {error}
        }
    }
}

module.exports = FlightRepository


// how the filterObj look like
/**
 * 
 *where: {
    arrivalAirpotId: 1,
    minPrice: 35000,
    price: {[op.gte: 3500]}
 }
 */