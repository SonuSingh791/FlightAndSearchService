const express = require('express');
const router = express.Router();
const {create, get, update, destroy} = require('../../controllers/cityController');

router.post('/city', create);
router.get('/city/:id', get);
router.patch('/city/:id', update);
router.delete('/city/:id', destroy);

module.exports = router;