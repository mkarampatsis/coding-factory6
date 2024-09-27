const express = require('express');
const router = express.Router();

const userProductController = require('../controllers/user.product.controller');

router.get('/users/products', userProductController.findUsersProducts);
router.get('/:username/products', userProductController.findUserProducts);
router.post('/:username/products', userProductController.insertUserProduct);
router.patch('/:username/products/:id', userProductController.updateUserProduct);
router.delete('/:username/products/:id', userProductController.deleteUserProduct);

router.get('/stats1', userProductController.stats1);
router.get('/:username/stats2/', userProductController.stats2)

module.exports = router;