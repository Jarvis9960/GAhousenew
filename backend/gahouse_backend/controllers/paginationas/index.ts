//import mongoose from "mongoose";
import property from "../../schema/propertySchema";


const propertyPaginations = async (req: any, res: any) => {
    try {
        const query = req.query;

        let page = parseInt(query.page) || 1
        let limit = parseInt(query.limit) || 1
        const skip = (page - 1) * limit
        const propertydata = await property.find({}).skip(skip).limit(limit)
        res.status(200).send({ data: propertydata })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }



}
export default propertyPaginations;