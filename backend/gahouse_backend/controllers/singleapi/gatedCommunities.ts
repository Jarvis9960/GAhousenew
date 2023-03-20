import property from "../../schema/propertySchema";

const gatedCommunitysinglepage = async (req: any, res: any) => {

    try {
        const result = await property.aggregate([{
            $match: {
                SecurityFeatures: {
                    $elemMatch: {
                        $in: ["Gated Community", "Security Gate", "Security Service"]
                    }
                }
            }
        }])
        console.log(result)
        res.status(200).send({ data: result })

    } catch (error: any) {
        res.status(400).send({ error: error.message })
    }




}


export default gatedCommunitysinglepage;