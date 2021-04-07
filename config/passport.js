const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Load User Model
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(passport
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        // Match User
        User.fineOne({ email: email })
            .then(user => {
                if ()

            })
            .catch(err => console.log(err));
    })
    );
}