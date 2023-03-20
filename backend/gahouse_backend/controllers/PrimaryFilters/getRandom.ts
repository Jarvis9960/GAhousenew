

import property from "../../schema/propertySchema";
const d = new Date();
d.setMonth(-6)


const reports: any = {
    bedroomMain: { "MainLevelBedrooms": { $gt: "0" } },
    gatedCommunities: {
        SecurityFeatures: {
            $elemMatch: {
                $in: ["Gated Community", "Security Gate", "Security Service"]
            }
        }
    },
    highRise: {
        "ArchitecturalStyle": {
            $elemMatch: {
                $in: ["High Rise", "High Rise (6 or more stories)"]
            }
        }
    },
    investorProperties: {
        "FMLS_AssociationRentRestrictionsYN": "No"
    },
    waterfront: {
        "WaterBodyName": {
            $ne: "None"
        }
    },
    luxuryHomes: { ListPrice: { $gte: '749999' } },

    primaryOnMain: {
        RoomBedroomFeatures: {
            $elemMatch: {

                $in: ["Master On Main Level", "Master on Main"]

            }
        }
    },
    NewBuilds: {
        PropertyCondition: {
            $elemMatch: {
                $in: ["To Be Built", "New Construction"]
            }
        }
    },

    newProperty: { DaysOnMarket: { $lte: 7 } },

    olderProperty: {
        DaysOnMarket: { $gte: 30 }
    },
    recenltySoldProperty: {
        CloseDate: {
            $gte: d
        }
    },
    pools: { "PoolPrivateYN": "true" },

    RanchHouse: {
        ArchitecturalStyle: {
            $elemMatch: {
                $in: ["Ranch"]
            }
        }
    }
}



const primaryFilters = async (req: any, res: any) => {
    try {
        console.log("req.query", req.query)
        const CountyOrParish: string = req.query?.CountyOrParish;
        const MlsStatus: string = req.query?.MlsStatus;
        const City: string = req.query?.City;
        const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
        const BedroomsTotal: string = req.query?.BedroomsTotal;
        const minPrice: string = req.query?.minPrice;
        const page: string = req.query?.page;
        const maxPrice: string = req.query?.maxPrice;
        const report: string = req.query?.report;
        const PropertySubType: string = req.query?.PropertySubType;
        const sortListPrice: string = req.query.sortListPrice;
        const school: string = req.query?.school
        const andfilter: any[] = [{ "_id": { $ne: null } }]
        const sorting: any = { "ListingContractDate": -1 }
        const status = ["Active", "Active Under Contract", "Pending", "Hold", "Closed"]
        if (status.includes(MlsStatus)) {
            andfilter.push({ MlsStatus: MlsStatus })
        }
        if (school && school.trim() && school.length > 0) {
            andfilter.push({
                $or: [
                    { "ElementarySchool": { $regex: school, $options: "i" } },
                    { "HighSchool": { $regex: school, $options: "i" } },
                    { "MiddleOrJuniorSchool": { $regex: school, $options: "i" } },
                ]
            })
        }
        if (City && City.trim() && City !== "undefined") {
            andfilter.push({ City: { $regex: City } })
        }
        if (PropertySubType && PropertySubType.trim() && PropertySubType !== "undefined") {
            andfilter.push({ PropertySubType: PropertySubType })
        }
        if (CountyOrParish && CountyOrParish.trim() && CountyOrParish !== "undefined") {
            andfilter.push({ CountyOrParish: { $regex: CountyOrParish } })
        }
        if (report && reports[report]) {
            andfilter.push(reports[report])
        }

        if (BathroomsTotalInteger && BathroomsTotalInteger.trim() && BathroomsTotalInteger !== "undefined") {
            andfilter.push({ BathroomsTotalInteger: { $gte: BathroomsTotalInteger } })
        }
        if (BedroomsTotal && BedroomsTotal.trim() && BedroomsTotal !== "undefined") {
            andfilter.push({ BedroomsTotal: { $gte: BedroomsTotal } })
        }
        if (minPrice && minPrice.trim() && minPrice !== "undefined") {
            andfilter.push({ ListPrice: { $gte: minPrice } })
        }
        if (maxPrice && maxPrice.trim() && maxPrice !== "undefined") {
            andfilter.push({ ListPrice: { $lte: maxPrice } })
        }

        if (minPrice) {
            sorting['updatedAt'] = -1;
        }
        let result: any;
        const count = await property.aggregate([
            { $match: { $and: andfilter } },
            { $count: 'count' }])

        let pageNumber = 1
        let row = 15
        if (page && Number(page) > 0) {
            pageNumber = Number(page)
        }
        const results: any = { "next": 0, previous: 0, page: 1, total: 0, data: [] };
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

        console.log("andfilter=<property", andfilter)

        const data = await property.aggregate([
            {
                $match: { $and: andfilter }
            },
            {
                $group: {
                    _id: "$_id",
                    UnparsedAddress: { $first: "$UnparsedAddress" },
                    ArchitecturalStyle: { $first: "$ArchitecturalStyle" },
                    MainLevelBedrooms: { $first: "$MainLevelBedrooms" },
                    BathroomsTotalInteger: { $first: "$BathroomsTotalInteger" },
                    BedroomsTotal: { $first: "$BedroomsTotal" },
                    ParkingTotal: { $first: "$ParkingTotal" },
                    BuildingAreaTotal: { $first: "$BuildingAreaTotal" },
                    PropertySubType: { $first: "$PropertySubType" },
                    sourcesyetemname: { $first: "$sourcesyetemname" },
                    architeuturalstyle: { $first: "$architeuturalstyle" },
                    CountyOrParish: { $first: "$CountyOrParish" },
                    ListPrice: { $first: "$ListPrice" },
                    PropertyCondition: { $first: "$PropertyCondition" },
                    FMLS_AssociationRentRestrictionsYN: { $first: "$FMLS_AssociationRentRestrictionsYN" },
                    SecurityFeatures: { $first: "$SecurityFeatures" },
                    RoomBedroomFeatures: { $first: "$RoomBedRoomFeatures" },
                    VirtualTourURLUnbranded: { $first: "$VirtualTourURLUnbranded" },
                    DaysOnMarket: { $first: "$DaysOnMarket" },
                    WaterBodyName: { $first: "$WaterBodyName" },
                    Media: { $first: "$Media" },
                    PropertyType: { $first: "$PropertyType" },
                    ListingId: { $first: "$ListingId" }
                }
            }, {
                $sort: sorting,
            },
        ]).skip(startIndex)
            .limit(limit);
        results['data'] = data
        res.status(200).send(results)
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

}

export default primaryFilters;









