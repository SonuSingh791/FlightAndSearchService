const { CityService } = require('../services/cityService');

const cityService = new CityService();

const create = (req, res) => {
    try {
        const city = cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error creating city",
            err: error
        });
    }
}
const get = (req, res) => {
    try {
        const city = cityService.getCityById(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City fetched successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error getting city",
            err: error
        });
    }
}
const update = (req, res) => {
    try {
        const city = cityService.updateCity(req.body, req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Updated city successfully",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error updating city",
            err: error
        });
    }
}
const destroy = (req, res) => {
    try {
        const response = cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "deleted city successfully",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error deleting city",
            err: error
        });
    }
}

module.exports = {
    get: get,
    create: create,
    update: update,
    destroy: destroy
}