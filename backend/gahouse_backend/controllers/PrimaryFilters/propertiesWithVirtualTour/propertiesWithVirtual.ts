import property from "../../../schema/propertySchema";

const PropertieswithVirtualTour = async (req: any, res: any) => {

    const andfilter: any[] = [];
    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    const minPrice: string = req.query?.minPrice;
    const maxPrice: string = req.query?.maxPrice;
    let page:Number= req.query.page
    let sorting: any = { "ListingContractDate": -1 }
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
        },
        {
            "$sort": sorting
        },
        {
            $group: {
                _id: "$_id",
                ArchitecturalStyle: { $first: "ArchitecturalStyle" },
                MainLevelBedrooms: { $first: "MainLevelBedrooms" },
                bedroom: { $first: "bedroom" },
                bathrom: { $first: "bathrom" },
                parking: { $first: "parking" },
                area: { $first: "area" },
                propertysubtype: { $first: "propertysubtype" },
                sourcesyetemname: { $first: "sourcesyetemname" },
                architeuturalstyle: { $first: "architeuturalstyle" },
                CountyOrParish: { $first: "CountyOrParish" },
                ListPrice: { $first: "ListPrice" },
                PropertyCondition: { $first: "PropertyCondition" },
                FMLS_AssociationRentRestrictionsYN: { $first: "FMLS_AssociationRentRestrictionsYN" },
                SecurityFeatures: { $first: "SecurityFeatures" },
                RoomBedroomFeatures: { $first: "RoomBedRoomFeatures" },
                VirtualTourURLUnbranded: { $first: "VirtualTourURLUnbranded" },
                DaysOnMarket: { $first: "DaysOnMarket" },
                WaterBodyName: { $first: "WaterBodyName" },
            }
        }
    ])
    res.status(200).send({ data: result })
}
export default PropertieswithVirtualTour;