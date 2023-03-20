import property from "../../../schema/propertySchema";
const RanchHouse = async (req: any, res: any) => {
    const andfilter: any[] = [];

    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    let minPrice: string = req.query?.minPrice;
    let maxPrice: string = req.query?.maxPrice;
    let page = req.query?.page;
    let sorting: any = { "ListingContractDate": -1 }


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
                    $in: ["Ranch"]
                }
            }
        }
    )

    let count = await property.aggregate([{
        $match: {
            $and: andfilter
        }
    }, {
        $count: "count"
    }

    ])




    let pageNumber = 1
    let row = 15
    if (page && Number(page) > 0) {
        pageNumber = Number(page)
    }

    const results: any = { "next": 0, previous: 0, page: 1, total: 0, data: [] }
    const limit = row;
    const startIndex = (pageNumber - 1) * limit;
    const endIndex = pageNumber * limit;

    if (endIndex < count[0]?.count) {
        results['next'] = Number(pageNumber) + 1;
    }
    if (startIndex > 0) {
        results['previous'] = Number(pageNumber - 1);
    }
    results['page'] = Number(pageNumber);
    results['total'] = Number(count[0]?.count);

    const result = await property.aggregate([
        {
            $match: {
                $and: andfilter
            }
        }
        ,
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
        , {
            $sort: sorting
        },
    ])

    results['data'] = result

    res.status(200).send({ data: results })
}

export default RanchHouse;