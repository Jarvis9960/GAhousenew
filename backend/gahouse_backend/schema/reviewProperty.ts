import mongoose, { mongo } from "mongoose";

const reviewPropertySchema = new mongoose.Schema({
    rating: {
        type: String,
        required: true

    },
    review: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },



    title: {
        type: String,
        required: true

    },

    id: {
        type: String,
        required: true

    }

})

const reviewProperty = mongoose.model('reviewProperty', reviewPropertySchema);
export default reviewProperty;