const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server Tests', () => {
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
});

it('should return json object 2', (done) => {
  request(app)
    .get('/json')
    .expect(200)
    .expect((res) =>{//function with response as argument
      //using expect lib to assert specific prop
      expect(res.body).toInclude({age: 19})
    })
    .end(done);
});
