import Joi from "joi";


const reviewvalidation = Joi.object({

    rating: Joi.number().required(),
    review: Joi.string().required().min(2),
    name: Joi.string().required().min(2),

    email: Joi.string().required().min(2).email(),



    title: Joi.string().required().min(2),

    id: Joi.string().required().min(2)

})

export default reviewvalidation;