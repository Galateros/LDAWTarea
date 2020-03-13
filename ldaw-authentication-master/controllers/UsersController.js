let UsersModel = require('../models/User')

/*exports.index = (req, res) => {
  let user = req.user;
  res.render('dashboard/index', {user: user});
  //console.log(req);
}*/
exports.users = (req,res) =>{
	UsersModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let users = data;
      // Enviamos los datos a la vista
      res.render('dashboard/users', { users: users });
      //res.redirect("/about");
    });
}