const utils = require('./utils.js');
const expect = require('expect');

it('should add two numbers', () => {
  var res = utils.add(4,5);

  expect(res).toBe(9).toBeA('number');
});

it('should compare two objects', () => {
  var obj = {
    name: 'Thiago',
    age: 19
  };

  expect(obj).toEqual({age:19, name:  'Thiago'});
});

it('should expect some values', () => {
  var obj = {
    name: 'Thiago',
    age: 19
  };

  expect(obj).toInclude({age: 19});
});

it('should async add two numbers', (done) => {
  utils.addAsync(4,5,(res) => {
    expect(res).toBe(9).toBeA('number');
    done();
  });
});
