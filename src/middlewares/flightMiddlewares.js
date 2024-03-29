// Middlewares are just a function which has access to the request object, response object and next function
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaineId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory parameters to create flight'
        });
    }
    next();
}

module.exports = {validateCreateFlight};