const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call save user with user object', () => {
        var username = "thiagolrc";
        var password = "123";

        app.handleSignup(username, password);

        expect(db.saveUser).toHaveBeenCalledWith({username, password});  
    });
});