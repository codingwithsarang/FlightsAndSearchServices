const CityRepository = require('../repository/index.js')

class CityService{
        constructor(){
            this.cityRepository = new CityRepository()
        }

        async createCity(data){
            try {
                const city = await this.cityRepository.createCity(data)
                return city
            } catch (error) {
                console.log('something went wrong on service layer')
                throw {error}
            }
        }

        async getCity(cityId){
            try {
                const city = await this.cityRepository.getCity(cityId)
                return city
            } catch (error) {
                console.log('something went wrong on service layer')
                throw {error}
            }
        }

        async updateCity(cityId, data){
            try {
                const city = await this.cityRepository.updateCity(cityId, data)
                return city
            } catch (error) {
                console.log('something went wrong on service layer')
                throw {error}
            }
        }

        async deleteCity(cityId){
            try {
                const responce = await this.cityRepository.deleteCity(cityId)
                return responce
            } catch (error) {
                console.log('something went wrong on service layer')
                throw {error}
            }
        }
}

module.exports = CityService