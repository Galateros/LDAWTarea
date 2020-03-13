let router = require('express').Router();
let dashboardController = require('../controllers/UsersController');

router.get('/', dashboardController.users)

module.exports = router;
