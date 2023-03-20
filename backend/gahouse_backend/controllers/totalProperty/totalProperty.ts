import property from "../../schema/propertySchema";


const totalProperty = async (req: any, res: any) => {

    try {
        const totalResult = await property.aggregate([{
            $count: "totalproperty"
        }])

        res.status(200).send({ data: totalResult })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }

}

export default totalProperty;