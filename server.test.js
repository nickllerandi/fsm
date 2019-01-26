const request = require("supertest");
// const expect = require("expect");
const app = require("./server");

// describe("server.js", () => {
//     it("should return fsm", (done) => {
//         request(app)
//             .get("/")
//             .expect(200)
//             .expect("Fullstack Musician")
//             .end(done);
//     });
// });

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});