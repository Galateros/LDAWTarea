let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');

router.get('/dashboard', dashboardController.index);
//router.get('/users',authMiddleware.isAdmin, dashboardController.users)

module.exports = router;
