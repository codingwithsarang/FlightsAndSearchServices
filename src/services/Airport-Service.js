const { AirportRepository } = require("../repository/index");
const CrudService = require("./Crud-service");

class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository()
        super(airportRepository)
    }
}


module.exports = AirportService