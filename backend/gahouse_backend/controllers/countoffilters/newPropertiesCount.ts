import property from "../../schema/propertySchema";

const sevendaysorlessPropertyCount = async (req: any, res: any) => {
    const andfilters: any[] = [];
    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    let minPrice: string = req.query?.minPrice;
    let maxPrice: string = req.query?.maxPrice;
    if (CountyOrParish) {
        andfilters.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        andfilters.push({ BedroomsTotal: BedroomsTotalvalue })

    }
    if (BathroomsTotalInteger) {
        andfilters.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })

    }
    if (minPrice) {
        andfilters.push({ ListPrice: { $gte: minPrice } })

    }
    if (maxPrice) {
        andfilters.push({ ListPrice: { $lte: maxPrice } })

    }
    console.log(andfilters)
    andfilters.push({ DaysOnMarket: { $lte: 7 } })
    const result = await property.aggregate([{
        $match: {
            $and: andfilters
        },
    },], {
        collation: {
            locale: "en_US",

            numericOrdering: true
        }
    }).count("newpropertiesCount");
    res.status(200).send({ data: result })
}


export default sevendaysorlessPropertyCount;