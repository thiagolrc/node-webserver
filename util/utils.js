module.exports.add = (a, b) => a + b;

module.exports.addAsync = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};
