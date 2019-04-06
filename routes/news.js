var express = require("express")
var router = express.Router()
const News = require("../models/news")

// Получить все новости
router.get("/", (req, res) => {
  News.find().then(news => {
    res.send(news)
  })
})

// Добавить 1 новость
router.put("/", (req, res) => {
  let news = new News(req.body)
  news.save().then(news => {
    res.send(news)
  })
})

module.exports = router
