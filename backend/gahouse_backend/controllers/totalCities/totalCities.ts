import property from "../../schema/propertySchema";

const totalCities = async (req: any, res: any) => {

    try {
        const match: any = { "City": { "$ne": null } }
        const CountyOrParish: string = req.query.CountyOrParish
        if (CountyOrParish) {
            match["CountyOrParish"] = CountyOrParish
        }
        const data = await property.aggregate([
            {
                $match: match,
            }, {
                $group: {
                    _id: '$City'
                }
            },
            {
                $sort: {
                    _id: 1
                }
            },
            {
                $group: {
                    _id: null,
                    "cities": { $push: "$_id" }
                }
            },

        ])


        res.status(200).send(data[0])

    } catch (error: any) {
        res.status(400).send({ error: error.message })
    }




}
export default totalCities;

//import property from "../../schema/propertySchema";


// const allCities = async (req: any, res: any) => {

//     try {

//         const result = await property.aggregate([{
//             $match: {
//                 'City': {
//                     $ne: null
//                 }
//             }
//         },
//         {
//             $group: {
//                 _id: "$City"
//             }
//         }, {
//             $sort: {
//                 _id: 1
//             }
//         }
//         ])


//         res.status(200).send(result)

//     } catch (error) {
//         res.status(400).send(error)
//     }


// }
// export default allCities