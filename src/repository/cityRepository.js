const {City, sequelize} = require('../models/index');
const {Op} = require('sequelize');
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

    async getAllCities(query) {
        try {
            console.log(query.name);
            if(query.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: query.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log('Something went wrong at repository layer');
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