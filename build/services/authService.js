"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.getToken = exports.authenticateUser = void 0;
var token = "0x6364a1e58cba6186e536c152635ae68891445345c9cbc065a2e6245e29bad81d3bc43c8611e78b166fb0bff7728e9cbdb7ba0f9ee81634f329d4330adcd230771b";
var authenticateUser = function (req, res) {
    token = req.body.authParams;
};
exports.authenticateUser = authenticateUser;
var getToken = function () {
    return "0x6364a1e58cba6186e536c152635ae68891445345c9cbc065a2e6245e29bad81d3bc43c8611e78b166fb0bff7728e9cbdb7ba0f9ee81634f329d4330adcd230771b";
};
exports.getToken = getToken;
var verifyToken = function (req, res, next) {
    var clientToken = req.headers.token;
    if (token === clientToken) {
        next();
    }
    else {
        return res.status(401).json({ message: 'No Authorization' });
    }
};
exports.verifyToken = verifyToken;
