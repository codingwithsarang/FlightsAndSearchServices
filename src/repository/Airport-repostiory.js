const {Airport} = require('../models/index.js')

class AirportRepository{

    async createAirport(airportDetails){
        try {
            const airport = await Airport.create(airportDetails)
            return airport
        } catch (error) {
            console.log('Something went wrong in repository layer')
            throw {error}
        }
    }

    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId)
            return airport
        } catch (error) {
            console.log('Something went wrong in repository layer')
            throw {error}
        }
    }
    async updateAirport(airportId, data){
        try {
            const airport = await Airport.update(data, {
                where: {
                    id: airportId
                }
            })
            return airport
        } catch (error) {
            console.log('Something went wrong in repository layer')
            throw {error}
        }
    }
    async deleteAirport(airportId){
        try {
             await Airport.destroy({
                where: {
                    id: airportId
                }
            })
            return true
        } catch (error) {
            console.log('Something went wrong in repository layer')
            throw {error}
        }
    }
}

module.exports = AirportRepository