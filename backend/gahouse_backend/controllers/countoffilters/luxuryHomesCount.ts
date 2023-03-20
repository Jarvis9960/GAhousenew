import property from "../../schema/propertySchema";

const luxuryHomesCount = async (req: any, res: any) => {
    const filter: any[] = [];
    const CountyOrParish = req.query.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;

    filter.push({
        ListPrice: {
            $gte: "749999"
        }
    })

    if (CountyOrParish) {
        filter.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        filter.push({ BedroomsTotal: BedroomsTotalvalue })
    }
    if (BathroomsTotalInteger) {
        filter.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })
    }


    console.log(filter)

    const countResult = await property.aggregate([
        {
            $match: {
                $and: filter
            }
        },

        {
            $count: "countLuxuryHomes"
        },],
        {
            collation: {
                locale: "en_US",

                numericOrdering: true
            }
        }
    )
    res.status(200).send({ data: countResult })


}
export default luxuryHomesCount;