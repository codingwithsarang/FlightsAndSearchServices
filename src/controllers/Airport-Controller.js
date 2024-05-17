const {AirportService} = require('../services/index')

const airportService = new AirportService()

const createAirport = async(req,res)=>{
    try {
        const response = await airportService.create(req.body)
        return res.status(201).json({
            data: response,
            success: true,
            message: "Airport created successfully",
            error: {}
        })
    } catch (error) {
        console.log('something went wrong on controller layer')
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create airport",
            error: {error}
        })
    }
}
const getAirport = async(req,res)=>{
    try {
        const response = await airportService.get(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Airport created successfully",
            error: {}
        })
    } catch (error) {
        console.log('something went wrong on controller layer')
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get airport",
            error: {error}
        })
    }
}
const updateAirport = async(req,res)=>{
    try {
        const response = await airportService.update(req.params.id, req.body)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Airport updated successfully",
            error: {}
        })
    } catch (error) {
        console.log('something went wrong on controller layer')
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update airport",
            error: {error}
        })
    }
}
const deleteAirport = async(req,res)=>{
    try {
        const response = await airportService.delete(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Airport updated successfully",
            error: {}
        })
    } catch (error) {
        console.log('something went wrong on controller layer')
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update airport",
            error: {error}
        })
    }
}
const getAirportByCity = async(req,res)=>{
    try {
        const response = await airportService.findByCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched airports",
            error: {}
        })
    } catch (error) {
        console.log('something went wrong on controller layer')
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch airports",
            error: {error}
        })
    }
}

module.exports = {
    createAirport,
    getAirport,
    updateAirport,
    deleteAirport,
    getAirportByCity
}