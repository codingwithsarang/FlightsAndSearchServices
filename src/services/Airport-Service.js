const {AirportRepository} = require('../repository/index.js')

class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository();
    }

    async create(data){
        try {
            const responce = await this.airportRepository.createAirport(data)
            return responce
        } catch (error) {
            console.log('something went wrong on service layer')
            throw {error}
        }
    }

    async get(id){
        try {
            const responce = await this.airportRepository.getAirport(id)
            return responce
        } catch (error) {
            console.log('something went wrong on service layer')
            throw {error}
        }
    }
    async update(id, data){
        try {
            const responce = await this.airportRepository.updateAirport(id ,data)
            return responce
        } catch (error) {
            console.log('something went wrong on service layer')
            throw {error}
        }
    }
    async delete(id){
        try {
            const responce = await this.airportRepository.deleteAirport(id )
            return responce
        } catch (error) {
            console.log('something went wrong on service layer')
            throw {error}
        }
    }
}

module.exports = AirportService