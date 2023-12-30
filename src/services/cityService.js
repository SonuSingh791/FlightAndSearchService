const {CityRepository} = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async getCityById(cityId) {
        try {
            const city = await this.cityRepository.getCityById(cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong at service layer', error);
            throw {error};
        }
    }

    async getAllCities(query) {
        try {
            console.log(query);
            const cities = await this.cityRepository.getAllCities({name: query.name});
            return cities;
        } catch (error) {
            console.log('Something went wrong at service layer', error);
            throw {error};
        }
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log('Something went wrong at service layer', error);
            throw {error};
        }
    }

    async updateCity(data, cityId) {
        try {
            const city = await this.cityRepository.updateCity(data, cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong at service layer', error);
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await this.cityRepository.deleteCity(cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong at service layer', error);
            throw {error};
        }
    }
}

module.exports = CityService;