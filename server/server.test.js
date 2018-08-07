const request = require('supertest');

var app = require('./server.js').app;

it('should return hello world', (done) => {
  request(app)
    .get('/hello')
    .expect(200)
    .expect('Hello World!')
    .end(done);
});

it('should return json object', (done) => {
  request(app)
    .get('/json')
    .expect(200)
    .expect({
      name: 'Thiago',
      age: 19
    })
    .end(done);
});
