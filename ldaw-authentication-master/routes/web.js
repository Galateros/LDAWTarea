let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');
let passport = require('passport');

router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);
router.post('/register', authValidator.store, authController.store);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login?authError=1', successRedirect: '/app/dashboard' }));
/*function(err,user,info){
	var error = err||info;
	if error return res.redirect('/login?authError=1');
	if (req.user.rol =='admin') {
		res.redirect('/app/users');
	}else{
		res.redirect('app/dashboard');
	}
}*/


	
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
