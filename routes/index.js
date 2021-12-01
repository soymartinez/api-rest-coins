const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/coins', controllers.getCoins);
router.post('/coins', controllers.createCoin);
router.get('/coins/:id', controllers.idCoin);
router.delete('/coins/:id', controllers.deleteCoin);
router.put('/coins/:id', controllers.updateCoin);

module.exports = router;