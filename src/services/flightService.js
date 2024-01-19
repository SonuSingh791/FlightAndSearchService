const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaineId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }

    async getAllFlightData(data) {
        try {
            console.log(data)
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }
}

module.exports = FlightService;