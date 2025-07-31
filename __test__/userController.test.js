const request = require("supertest");
const app = require("../server");
describe("User API", () => {
  it("should return Hello World on GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World! Ini test Insignia!");
  });
});
