var express = require("express")
var router = express.Router()
let news = [
  {
    title: "Сервер",
    text: "Ура, сложный сервер заработал",
    img: ""
  },
  {
    title: "Страшно",
    text: "Много кода",
    img: ""
  }
]

// Получить все новости
router.get("/", (req, res) => {
  res.send(news)
})

// Добавить 1 новость
router.put("/", (req, res) => {
  let nw = req.body
  news.push(nw)
  nw.id = news.length
  res.send(nw)
})

module.exports = router
