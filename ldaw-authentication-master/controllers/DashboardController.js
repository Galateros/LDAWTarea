exports.index = (req, res) => {
  let user = req.user;
  let isAdmin = req.user.rol == 'admin'
  console.log("is Admin? : "+isAdmin)
  res.render('dashboard/index', {user: user, isAdmin:isAdmin})
  //console.log(req);
}

