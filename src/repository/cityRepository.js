const {City} = require('../models/index');

class CityRepository {
    async createCity({name}) {
        try {
            console.log("Nameee", name);
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async getCityById(id) {
        try {
            const city = await City.findByPk(id);
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async updateCity(data, cityId) {
        try {
            const city = await City.update(data, {
                where: {id: cityId}
            });
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;