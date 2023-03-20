import Joi from "joi";
const contactUsValidation = Joi.object({
    //email, firstName, phone, quary
    email: Joi.string().required().min(2).email(),
    firstName: Joi.string().required().min(2),

    phone: Joi.string().required().min(2),
    quary: Joi.string().required().min(2)

})

export default contactUsValidation;