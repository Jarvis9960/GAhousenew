import property from "../../schema/propertySchema";
const HighRiseCount = async (req: any, res: any) => {
    const andfilter: any[] = [];

    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    let minPrice: string = req.query?.minPrice;
    let maxPrice: string = req.query?.maxPrice;
    console.log(CountyOrParish)

    if (CountyOrParish) {
        andfilter.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        andfilter.push({ BedroomsTotal: BedroomsTotalvalue })

    }
    if (BathroomsTotalInteger) {
        andfilter.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })

    }
    if (minPrice) {
        andfilter.push({ ListPrice: { $gte: minPrice } })

    }
    if (maxPrice) {
        andfilter.push({ ListPrice: { $lte: maxPrice } })

    }


    andfilter.push(
        {
            ArchitecturalStyle: {
                $elemMatch: {
                    $in: ["High Rise", "High Rise (6 or more stories)"]
                }
            }
        }
    )
    console.log(andfilter, 'this is the value of the filter')

    const result = await property.aggregate([
        {
            $match: {
                $and: andfilter
            }
        }
        , {
            $count: "HighRiseCount"
        }
    ])


    res.status(200).send({ data: result })
}

export default HighRiseCount;