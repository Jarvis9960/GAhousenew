import property from "../../schema/propertySchema";

const masterOrmainCount = async (req: any, res: any) => {

    const filter: any[] = [];

    filter.push({
        RoomBedroomFeatures: {
            $elemMatch: {

                $in: ["Master On Main Level", "Master on Main"]

            }
        }
    })

    const CountyOrParish = req.query.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    let minPrice: string = req.query?.minPrice;
    let maxPrice: string = req.query?.maxPrice;
    if (CountyOrParish) {
        filter.push({
            CountyOrParish: CountyOrParish
        })
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
        filter.push({ ListPrice: { $lte: maxPrice } })

    }
    const result = await property.aggregate([{
        $match: {
            $and: filter
        }
    }
    ]).count('main')
    console.log(result, 'this is the result')

    res.status(200).send({ data: result })
}
export default masterOrmainCount