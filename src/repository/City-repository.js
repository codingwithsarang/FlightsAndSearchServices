
const { where } = require('sequelize')
const {City} = require('../models/index')



class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name})
            return city
        }
        catch(error){
            console.log('something went wrong in the  repository layer')
            throw {error}
        }
    }

    async getCity({cityId}){
        try{
            const city = await City.findByPk(cityId)
            return city
        }catch(err){
            console.log('something went wrong in the  repository layer')
            throw {error}
        }
    }

    async updateCity(cityId, data){
        try {
            const updatedCity = await City.update(data, {
                where: {id: cityId}
            })
            return updatedCity;
        } catch (error) {
            console.log('something went wrong in the  repository layer')
            throw {error}
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            })
            return true
        }catch(err){
            console.log('something went wrong in the  repository layer')
            throw {err}
        }
    }
}

module.exports = CityRepository