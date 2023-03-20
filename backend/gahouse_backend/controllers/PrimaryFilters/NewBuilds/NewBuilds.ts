import property from "../../../schema/propertySchema";

const Newbuilds = async (req: any, res: any) => {
    const filters: any[] = [];
    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    let minPrice: string = req.query?.minPrice;
    let maxPrice: string = req.query?.maxPrice;
    const page:string= req.query.page;
    let sorting: any = { "ListingContractDate": -1 }

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
    const count = await property.aggregate([{
        $match: {
            $and:filters
        }
    }])

    let pageNumber = 1
    let row = 15
    if (page && Number(page) > 0) {
        pageNumber = Number(page)
    }

    const results: any = { "next": 0, previous: 0, page: 1, total: 0, data: [] }

    let limit = row
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




    const data = await property.aggregate([
        {
            $match: { $and: filters }
        }
        , {
            $sort: sorting
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

    results['data']= data

    res.status(200).send({ data: results })

}

export default Newbuilds;
//"To Be Built" or "New Construction"