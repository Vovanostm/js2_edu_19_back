const jwt = require("jsonwebtoken")
function check_auth(req, res, next) {
    const token = req.headers['authorization']
    jwt.verify(token, 'secret', function(err, decoded) {
      if (err) return res.status('401').send('err')
      next()
    });
}

module.exports = {
    check_auth
}