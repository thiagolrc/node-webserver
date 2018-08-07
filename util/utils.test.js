const utils = require('./utils.js');

it('should add two numbers', () => {
  var res = utils.add(4,5);
  if (res!=9) {
    throw new Error(`Result is ${res}. Expected is 9`);
  }
});
