import Joi, { string } from "joi";

const loginvalidation = Joi.object({
    email: Joi.string().email().required().lowercase().messages({ "message": "email is  herre required" }),
    password: Joi.string().required().min(4)


})
export default loginvalidation;