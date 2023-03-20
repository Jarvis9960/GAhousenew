import property from "../../../schema/propertySchema";




const recenltySoldProperty = async (req: any, res: any) => {
    const page = req.query?.page;

    const d = new Date();
    d.setMonth(-6)
    
    const filters: any[] = []
    filters.push(
        {
        CloseDate: {
            $gte: d
        }
    }
    )

    const count = await property.aggregate([{
        $match: {
            $and: filters
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




    const search = await property.aggregate([{
        $match: {
            $and: filters
        },
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

    results['data'] = search
    res.status(200).send({ data: results })
}


export default recenltySoldProperty;