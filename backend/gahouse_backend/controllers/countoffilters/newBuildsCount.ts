import property from "../../schema/propertySchema";
const NewbuildsCounts = async (req: any, res: any) => {
    const filters: any[] = [];
    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    let minPrice: string = req.query?.minPrice;
    let maxPrice: string = req.query?.maxPrice;


    filters.push({
        PropertyCondition: {
            $elemMatch: {
                $in: ["To Be Built", "New Construction"]
            }
        }
    });
    if (CountyOrParish) {
        filters.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        filters.push({ BedroomsTotal: BedroomsTotalvalue })

    }
    if (BathroomsTotalInteger) {
        filters.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })

    }
    if (minPrice) {
        filters.push({ ListPrice: { $gte: minPrice } })

    }
    if (maxPrice) {
        filters.push({ ListPrice: { $lte: maxPrice } })

    }
    const data = await property.aggregate([
        {
            $match: { $and: filters }
        }
        , {
            $count: "NewBuildsCount"
        }

    ])
    res.status(200).send({ data: data })

}

export default NewbuildsCounts;
