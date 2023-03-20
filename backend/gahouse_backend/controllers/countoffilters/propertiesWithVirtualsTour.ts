import property from "../../schema/propertySchema";
const PropertieswithVirtualTourCount = async (req: any, res: any) => {

    const andfilter: any[] = [];
    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    const minPrice: string = req.query?.minPrice;
    const maxPrice: string = req.query?.maxPrice;
    if (CountyOrParish) {
        andfilter.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        andfilter.push({ BedroomsTotal: BedroomsTotalvalue })

    }
    if (BathroomsTotalInteger) {
        andfilter.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })

    } if (minPrice) {
        andfilter.push({ ListPrice: { $gte: minPrice } })
    }
    if (maxPrice) {
        andfilter.push({ ListPrice: { $lte: maxPrice } })
    }

    console.log(andfilter)
    andfilter.push({
        VirtualTourURLUnbranded: {
            $ne: null
        },

    })
    console.log(andfilter)
    const result = await property.aggregate([

        {
            $match: {
                $and: andfilter
            }
        }

    ]).count('VirtualTourURLBrandedCount')
    res.status(200).send({ data: result })
}
export default PropertieswithVirtualTourCount;