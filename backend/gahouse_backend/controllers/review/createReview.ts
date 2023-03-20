import reviewProperty from "../../schema/reviewProperty";
import reviewvalidation from "../../validation/reviewvalidation";
const createReview = async (req: any, res: any) => {
    try {
        console.log(req.body)
        const { rating, review, name, email, title, id } = req.body;
        const { error, value } = reviewvalidation.validate(req.body)

        if (error) {
            console.log(error.details[0].message)
            res.status(400).send({ message: error.details[0].message })
        } else {
            console.log('hhhhhhhhhhhhhhhhhhhh')
            if (!rating || !review || !name || !email || !title || !id) {
                res.status(400).send({
                    message: "enter all the deatils properly"
                })
            } else {
                const savereview = await reviewProperty.create({
                    rating: rating,
                    review: review,
                    name: name,
                    email: email,

                    title: title,
                    id: id

                })
                res.status(200).send({ message: `thanks for the review about the property ${name}` })
            }
        }
    } catch (error: any) {
        console.log(error)
        res.status(400).send({ message: error.message })
    }




}

export default createReview;