import property from "../../schema/propertySchema";

const countyParishcount = async (req: any, res: any) => {
    const CountyOrParish: string = req.query.CountyOrParish;
    const BedroomsTotal: string = req.query.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query.BathroomsTotalIntegervalue;
    const minPrice: string = req.query.minPrice;
    const maxPrice: string = req.query.ListPrice;
    const filter: any[] = [];
    if (!CountyOrParish) {
        res.status(400).send({ message: "county or parish is not provided" })
    }
    if (BedroomsTotal) {
        filter.push({ BedroomsTotal: BedroomsTotalvalue })
    }
    if (BathroomsTotalInteger) {
        filter.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })
    }
    if (minPrice) {
        filter.push({ ListPrice: minPrice })
    }
    filter.push({
        CountyOrParish: CountyOrParish
    })

    console.log(filter)
    const countResult = await property.aggregate([{
        $match: {
            $and: filter
        }
    }, {
        $count: "total_count"
    }])

    res.status(200).send({ message: `total no of count of countyorparsih :${CountyOrParish}`, data: countResult[0] },)
}
export default countyParishcount;