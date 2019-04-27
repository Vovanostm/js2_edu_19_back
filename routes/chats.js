const express = require("express")
const router = express.Router()
const Users = require("../models/users")
const Chats = require("../models/chats")
const Messages = require("../models/messages")
const { check_auth } = require("../middleware/auth")

router.get("/", check_auth, (req, res) => {})

router.post("/messages", check_auth, (req, res) => {
  message = req.body
  message.from = req.user._id
  if (!message.chat) {
    let chat = new Chats()
    message.chat = chat._id
    chat.save()
  }
  message = new Messages(message)
  message.save().then(m => {
    res.send(message)
  })
})

module.exports = router
