var express = require("express")
var router = express.Router()
const News = require("../models/news")
const {check_auth} = require("../middleware/auth")

// Получить все новости
router.get("/", check_auth, (req, res) => {
  News.find().then(news => {
    res.send(news)
  })
})

// Добавить 1 новость
router.put("/", check_auth, (req, res) => {
  let news = new News(req.body)
  news.save().then(news => {
    res.send(news)
  })
})

module.exports = router
