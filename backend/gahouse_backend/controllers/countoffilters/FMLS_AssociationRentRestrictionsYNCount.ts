import property from "../../schema/propertySchema"
const FMLS_AssociationRentRestrictionsYNCount = async (req: any, res: any) => {
    const andfilter = []
    andfilter.push({
        "FMLS_AssociationRentRestrictionsYN": "true"

    })
    const result = await property.aggregate([{
        $match: {
            $and: andfilter
        },

    },
    {
        $count: "AssociationRentRestrictionsCount"
    }])
    res.status(200).send({ data: result })
}
export default FMLS_AssociationRentRestrictionsYNCount