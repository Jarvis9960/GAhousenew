const mongoose = require('mongoose')

const inquirySchema: any = new mongoose.Schema({
    InquiryType: {
        type: String,
        required: true
    },

    inquiry: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: [true, "Title required"]
    },
    email: {
        type: String,
        reqiure: true
    },
    phone: {
        type: String,
        required: true
    }
})



const inquiry = mongoose.model("inquiry", inquirySchema);
export default inquiry





// const messageSchema = new mongoose.Schema({
//     topic: {
//         type: String,
//         requiredd: true
//     },
//     isPublic: {
//         type: Boolean,
//         requiredd: false,
//         default: false
//     },
//     messageType: {
//         type: String,
//         requiredd: true,
//         default: "question"
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "user"
//     }
// })


// const message = mongoose.model("message", messageSchema);
// export default message
