

import property from "../../schema/propertySchema";
import * as mongoose from 'mongoose'
const d = new Date();
d.setMonth(-6)


const compareFilters = async (req: any, res: any) => {
    try {
        console.log("req.query", req.query)
        const andfilter: any[] = []
        const ids: string = req.query?.id
        if (ids?.split(",") && ids && ids.trim() && ids !== "undefined") {
            const idss = ids?.split(",")
            if (idss?.length > 0) {
                Promise.all(idss?.map(id => {
                    andfilter.push({ _id: new mongoose.Types.ObjectId(id) })
                }))
            } else {
                andfilter.push({ _id: new mongoose.Types.ObjectId(ids) })
            }
        } else {
            res.status(404).send()
        }

        console.log("andfilter", andfilter)
        const data = await property.aggregate([
            {
                $match: { $or: andfilter }
            }
        ])
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

}

export default compareFilters;









