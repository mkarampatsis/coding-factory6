const express = require('express');
const router = express.Router();

const userProductController = require('../controllers/user.product.controller');

router.get('/', userProductController.findALL);
router.get('/:username', userProductController.findOne);
router.post('/', userProductController.create);

module.exports = router;