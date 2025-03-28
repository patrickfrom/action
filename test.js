const request = require('supertest');
const { app, server } = require('./index'); // Import both app and server

afterAll(() => {
  server.close(); // Close the server after tests finish
});

test('GET / should return Hello World!', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World!');
});
