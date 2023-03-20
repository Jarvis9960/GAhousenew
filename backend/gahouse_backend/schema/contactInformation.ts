import { string } from "joi";
import mongoose, { mongo } from "mongoose";

const contactInformatinSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },


    email: {
        type: String
    },

    phone: {
        type: String
    },

    quary: {
        type: String,

    },

})

const contactInformation = mongoose.model('contactInformation', contactInformatinSchema);
export default contactInformation;