import property from "../../schema/propertySchema";

const gatedCommunityCount = async (req: any, res: any) => {

    const filter: any[] = []
    const CountyOrParish = req.query.CountyOrParish;
    const BedroomsTotal = req.query.BedroomsTotal;
    const BathroomsTotalInteger = req.query.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue = req.query.BathroomsTotalIntegervalue;
    const BedroomsTotalvalue = req.query.BedroomsTotalvalue;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    if (CountyOrParish) {
        filter.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        filter.push({ BedroomsTotal: BedroomsTotalvalue })
    }
    if (BathroomsTotalInteger) {
        filter.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })
    }
    if (minPrice) {
        filter.push({ ListPrice: { $gte: minPrice } })
    }
    if (maxPrice) {
        filter.push({
            ListPrice: {
                $lte: maxPrice
            }
        })
    }


    filter.push({
        SecurityFeatures: {
            $elemMatch: {
                $in: ["Gated Community", "Security Gate", "Security Service"]
            }
        }
    })

    console.log(filter)

    const countResult = await property.aggregate([{
        $match: {
            $and: filter
        }
    },
    {
        $count: "gatedCommunityCount"
    }

    ])
    res.status(200).send({ data: countResult })

}
export default gatedCommunityCount;