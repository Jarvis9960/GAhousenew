import Joi from "joi";

const contactInformatinvalidation = Joi.object({
    Name: Joi.string().required().min(1),
    email: Joi.string().required().email().min(1),
    phone: Joi.number().required().min(10),
    quary: Joi.string().min(2).required()
})

export default contactInformatinvalidation;