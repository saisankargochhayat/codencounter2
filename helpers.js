var helper = {
  is_authenticated : function(req,res,next) {
    if(req.session && req.session.user) {
      next()
    } else {
      res.send("You must be logged in to access this.")
    }
  }
};

module.exports = helper
