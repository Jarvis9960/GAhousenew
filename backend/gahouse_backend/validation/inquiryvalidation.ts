import Joi from "joi";

const inquiryvalidation = Joi.object({
    InquiryType: Joi.string().required().min(2),

    inquiry: Joi.string().required().min(2),
    firstname: Joi.string().required().min(2),
    lastname: Joi.string().required().min(2),
    email: Joi.string().required().min(2).email(),
    phone: Joi.number().required().min(2)
})

export default inquiryvalidation;