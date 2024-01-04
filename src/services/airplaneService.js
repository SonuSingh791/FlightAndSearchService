const { AirplaneRepository } = require('../repository/index');

class AirplaneService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async createAirplane(data) {
        try {
            const flight = await this.airplaneRepository.createAirplane(data);
            return flight;
        } catch (error) {
            console.log('Something went wrong at repository layer');
            throw { error };
        }
    }

    

}

module.exports = AirplaneService;