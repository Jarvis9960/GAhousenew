import property from "../../schema/propertySchema";

const schoolCount = async (req: any, res: any) => {

    const CountyOrParish: string = req.query.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    const minPrice: string = req.query?.minPrice;
    const maxPrice: string = req.query?.maxPrice;
    const filter: any[] = []
    filter.push({
        $or: [{
            "ElementarySchool": {
                $ne: null
            }
            ,
            "MiddleOrJuniorSchool": {
                $ne: null
            },
            "HighSchool": {
                $ne: null
            }

        }]
    }
    )
    if (CountyOrParish) {
        filter.push({ "CountyOrParish": CountyOrParish })
    }
    if (BedroomsTotal) {
        filter.push({ BedroomsTotal: BedroomsTotalvalue })

    }
    if (BathroomsTotalInteger) {
        filter.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })

    } if (minPrice) {
        filter.push({ ListPrice: { $gte: minPrice } })
    }
    if (maxPrice) {
        filter.push({ ListPrice: { $lte: maxPrice } })
    }


    const result = await property.aggregate([

        {
            $match: {
                $and: filter


            }

        }

    ]).count("schoolCount")
    res.status(200).send({ data: result })
}

export default schoolCount;