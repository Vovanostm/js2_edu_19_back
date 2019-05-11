const app = require("../../app")
const request = require("supertest")

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidm92YTIifSwiaWF0IjoxNTU2OTc5NTMzLCJleHAiOjE1NTY5ODMxMzN9.N8XtnFNDy_xPpodAZ8vPcI179KM4MxvEwuhRqC01Pek"

describe("GET /news", function() {
  it("only auth", function(done) {
    request(app)
      .get("/news/")
      .expect("Content-Type", /html/)
      .expect(401, done)
  })

  it("responds with json", function(done) {
    request(app)
      .get("/news/")
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200, done)
  })
})
