const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isEmailVerified: {
        type: Boolean,
        default: true
    },
    loginType: {
        type: String,
        default: "email"
    },
    profilePicture: {
        type: String,
        default: ""
    }
})


const user: any = mongoose.model("user", userSchema);
// module.exports= user;
export default user;