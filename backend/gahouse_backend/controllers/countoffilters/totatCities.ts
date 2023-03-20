import property from "../../schema/propertySchema";


const allCities = async (req: any, res: any) => {

    try {

        const result = await property.aggregate([{
            $match: {
                'City': {
                    $ne: null
                }
            }
        },
        {
            $group: {
                _id: "$City"
            }
        }, {
            $sort: {
                _id: 1
            }
        }
        ])

        console.log(result)

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error)
    }


}
export default allCities