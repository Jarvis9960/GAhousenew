import property from "../../../schema/propertySchema";

const FMLS_AssociationRentRestrictionsYN = async (req: any, res: any) => {
    const results: any = {}
    const page: string = req.query.page
    const andfilter = []
    andfilter.push({
        "FMLS_AssociationRentRestrictionsYN": "true"

    })
    const count = await property.aggregate([{
        $match: {
            $and: andfilter
        }
    }])

    results['data'] = count

    res.status(200).send({ data: results })
}
export default FMLS_AssociationRentRestrictionsYN