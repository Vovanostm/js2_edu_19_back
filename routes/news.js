var express = require("express")
var router = express.Router()
const News = require("../models/news")
const jwt = require("jsonwebtoken")

// Получить все новости
router.get("/", (req, res) => {
  News.find().then(news => {
    res.send(news)
  })
})

// Добавить 1 новость
router.put("/", (req, res) => {
  const token = req.headers['authorization']
  jwt.verify(token, 'secret', function(err, decoded) {
    if (err) return res.status('401').send('err')
    console.log(decoded)
    let news = new News(req.body)
    news.save().then(news => {
      res.send(news)
    })
  });
})

module.exports = router
