import property from "../../schema/propertySchema";
import school from "../../schema/schoolSchema";

const schoolRatingForProperTy = async (req: any, res: any) => {


    try {
        let schoolQuary: string = req.query?.school
        console.log(schoolQuary, 'this is the query')
        if (!schoolQuary) {
            res.status(404).send("school not found")
        }

        const data = await school.aggregate([
            {
                $match: { SCHOOL_NAME: { $regex: schoolQuary, $options: "i" } }
            },
            {
                $project: { RATING: 1 }
            }
        ])
        console.log(data)
        res.status(200).send(data[0]);
    } catch (err) {
        res.status(404).send(err)
    }


}

export default schoolRatingForProperTy;