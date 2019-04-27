const news = require("./news")
const auth = require("./auth")
const users = require("./users")

function route(app) {
  app.use("/auth", auth)
  app.use("/chats", require("./chats"))
  app.use("/news", news)
  app.use("/users", users)
  app.use("/uploads", require("./uploads"))
}

module.exports = route
