import mongoose, { mongo } from "mongoose";

const schoolSchema = new mongoose.Schema({
    County: {
        type: String,
        required: true

    },
    CITIES: {
        type: String,
        required: true
    },
    TYPE: {
        type: String,
    },

    SCHOOL_NAME: {
        type: String
    },

    FMLS_VALUE: {
        type: String
    },


    ZIP: {
        type: String,

    },
    RATING: {
        type: String,
        required: true
    }

})

const school = mongoose.model('school', schoolSchema);
export default school;