const express = require('express');
const router = express.Router();
const {create, get, update, destroy, getAll} = require('../../controllers/cityController');

router.post('/city', create);
router.get('/city/:id', get);
router.get('/city/', getAll);
router.patch('/city/:id', update);
router.delete('/city/:id', destroy);

module.exports = router;