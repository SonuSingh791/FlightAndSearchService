const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Succesfully created a new airport'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: [],
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        });
    }
}

module.exports = {
    create: create
}