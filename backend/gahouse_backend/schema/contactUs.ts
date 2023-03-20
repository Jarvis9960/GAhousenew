import mongoose, { mongo } from "mongoose";

const contactSchema = new mongoose.Schema({
    quaryType: {
        type: String,


    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    quary: {
        type: String,

    }

})

const contactUs = mongoose.model('contactUs', contactSchema);
export default contactUs;