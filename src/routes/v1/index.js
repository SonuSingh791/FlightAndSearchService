const express = require('express');
const router = express.Router();
const  CityController  = require('../../controllers/cityController');
const  FlightController  = require('../../controllers/flightController');
const AirportController = require('../../controllers/airportController');

router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.get('/city/', CityController.getAll);
router.patch('/city/:id', CityController.update);
router.delete('/city/:id', CityController.destroy);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);

module.exports = router;