exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
  	console.log(req.user.rol);
    next();
  } else {
  	res.redirect('/register')
    //res.status(401).json({ msg: 'You are not authorized to view this resource' });
  }
}

exports.isAdmin = (req,res,next) =>{
	if(req.isAuthenticated()){
		if (req.user.rol == 'admin') {
			next();
		}else{
			res.status(403).json({ msg: '403 You are not authorized to view this resource' });
		}
	}else{
	res.status(403).json({ msg: '403 You are not authorized to view this resource' });
	}
}