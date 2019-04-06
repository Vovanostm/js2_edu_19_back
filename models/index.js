const mongoose = require("mongoose")
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
// Подключение к БД
mongoose.connect(
  `mongodb+srv://${username}:${password}@shpjs-ekvgh.gcp.mongodb.net/test`,
  {
    useNewUrlParser: true
  }
)
