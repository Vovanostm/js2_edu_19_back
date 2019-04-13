var express = require("express")
var router = express.Router()
const Users = require("../models/users")
const jwt = require("jsonwebtoken")

// Залогиниться - найти пользователя, сверить пароль с БД
router.post("/login", (req, res) => {
  let { username, password } = req.body
  Users.findOne({ username })
    .then(user => {
      if (user.checkPassword(password)) {
        let token = jwt.sign(
          {
            data: {username},
          },
          "secret",
          { expiresIn: "1h" }
        )
        res.send(token)
      }
      throw new Error("=(")
    })
    .catch(err => {
      res.status("404").send(err)
    })
})

// Вернуть ok =)
router.post("/logout", (req, res) => {
  res.send("ok")
})

module.exports = router
