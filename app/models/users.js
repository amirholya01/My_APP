const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    username: {type: String, required: true, lowercase: true},
    mobile: {type: String, required: true, unique: true},
    email: {type: String, lowercase: true},
    password: {type: String},
    opt: {type: Object, default: {
            code: 0,
            expireIn: 0
        }},
    bills: {type: [], default: []},
    discount: {type: Number, default: 0},
    birthday: {type: String},
    roles: {type: [String], default: ["USER"]}
});

module.exports = {
    UserModel : mongoose.model("user", userSchema)
}