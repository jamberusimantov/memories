const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
// mongoose.model('user')
const user = require('../api/users/users_model')
const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, async(jwt_payload, done) => {
            try {
                const data = await user.findById(jwt_payload.id)
                data ? done(null, user) : done(null, false)
            } catch (error) { console.log(error) } finally {}
        })
    );
};