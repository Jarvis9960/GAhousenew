import Joi from "joi";

const useschemavalidation = Joi.object({
    email: Joi.string().email().required().lowercase(),
    password: Joi.string().required().min(4),
    first_name: Joi.string().min(2).max(20).required(),
    last_name: Joi.string().required().min(2).max(20),
    

})
export default useschemavalidation;