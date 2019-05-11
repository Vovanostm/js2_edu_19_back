const { max } = require("./simple")

describe("Test simple utils", function() {
  it("Test max 1 and 2", () => {
    expect(max(1, 2)).toBe(2)
  })
})
