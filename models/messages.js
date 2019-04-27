const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const schema = new mongoose.Schema({
  from: ObjectId,
  to: ObjectId,
  chat: ObjectId,
  text: String,
})
module.exports = mongoose.model("Messages", schema)
