import property from "../../schema/propertySchema";

const totalCountyOrparis = async (req: any, res: any) => {

    try {
        const data = await property.aggregate([
            {
                $match: {
                    'CountyOrParish': {
                        $ne: null
                    }

                },
            }, {
                $group: {
                    _id: '$CountyOrParish'
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
                    "counties": { $push: "$_id" }
                }
            },

        ])


        res.status(200).send(data[0])

    } catch (error: any) {
        res.status(400).send({ error: error.message })
    }




}
export default totalCountyOrparis;

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