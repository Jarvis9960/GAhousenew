

import property from "../../schema/propertySchema";
const d = new Date();
d.setMonth(-6)


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
        const ListingId: string = req.query?.ListingId
        const ids: string = req.query?.ids
        const andfilter: any[] = [{ "_id": { $ne: null }, "ListPrice": { $ne: null } }]
        let sorting: any = req?.query?.sorting
        let sortBy: any = req?.query?.sortBy
        const status = ["Active", "Active Under Contract", "Pending", "Hold", "Closed"]
        const search: string = req.query.search
        if (search && search.trim() && search.length > 0) {
            andfilter.push({
                "UnparsedAddress": { $regex: search, $options: "i" }
            })
        }
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
        if (ids?.split(",") && ids && ids.trim() && ids !== "undefined") {
            const idss = ids?.split(",")
            if (idss?.length > 0) {
                Promise.all(idss?.map(id => {
                    andfilter.push({ _id: id })
                }))
            } else {
                andfilter.push({ _id: ids })
            }
        }
        if (ListingId && ListingId.trim() && ListingId !== "undefined") {
            andfilter.push({ ListingId: { $regex: ListingId } })
        }
        if (City && City.trim() && City !== "undefined") {
            andfilter.push({ City: { $regex: City, $options: "i" } })
        }
        if (PropertySubType && PropertySubType.trim() && PropertySubType !== "undefined") {
            andfilter.push({ PropertySubType: PropertySubType, $options: "i" })
        }
        if (CountyOrParish && CountyOrParish.trim() && CountyOrParish !== "undefined") {
            andfilter.push({ CountyOrParish: { $regex: CountyOrParish, $options: "i" } })
        }
        // if (report && reports[report]) {
        //     andfilter.push(reports[report])
        // }

        const ReportsLabels = [
            "Featured", "Recommanded", "bedroomMain", "gatedCommunities", "highRise", "investorProperties", "waterfront", "luxury", "primaryOnMain", "NewBuilds", "newProperty", "olderProperty", "recenltySoldProperty", "pools", "RanchHouse"
        ]
        if (ReportsLabels.includes(report)) {
            console.log(report)
            andfilter.push({ labels: { $elemMatch: { $eq: report } } })
        }
        if (BathroomsTotalInteger && BathroomsTotalInteger.trim() && BathroomsTotalInteger !== "undefined") {
            andfilter.push({ "$expr": { "$gte": [{ "$toInt": "$BathroomsTotalInteger" }, Number(BathroomsTotalInteger)] } })

        }
        if (BedroomsTotal && BedroomsTotal.trim() && BedroomsTotal !== "undefined") {
            andfilter.push({ "$expr": { "$gte": [{ "$toInt": "$BedroomsTotal" }, Number(BedroomsTotal)] } })

        }
        if (minPrice && minPrice.trim() && minPrice !== "undefined") {
            andfilter.push({ "$expr": { "$gte": [{ "$toInt": "$ListPrice" }, Number(minPrice)] } })
            // andfilter.push({"ListPrice" : {"$gte" :minPrice}})

        }
        if (maxPrice && maxPrice.trim() && maxPrice !== "undefined") {
            andfilter.push({ "$expr": { "$lte": [{ "$toInt": "$ListPrice" }, Number(maxPrice)] } })
            // andfilter.push({"ListPrice" : {"$lte" :maxPrice}})
        }

        if ((sortBy == '1' || sortBy == '-1') && (sorting == 'ListPrice' || sorting == 'DaysOnMarket)')) {
            sortBy = Number(sortBy)
        } else {
            sorting = 'ListingId'
            sortBy = Number('-1')
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

        // console.log("andfilter=<property", andfilter)

        const data = await property.aggregate([
            {
                $match: { $and: andfilter }
            },
            {
                $project: {
                    _id: "$_id",
                    UnparsedAddress: "$UnparsedAddress",
                    ArchitecturalStyle: "$ArchitecturalStyle",
                    MainLevelBedrooms: "$MainLevelBedrooms",
                    BathroomsTotalInteger: "$BathroomsTotalInteger",
                    BedroomsTotal: "$BedroomsTotal",
                    ParkingTotal: "$ParkingTotal",
                    BuildingAreaTotal: "$BuildingAreaTotal",
                    PropertySubType: "$PropertySubType",
                    sourcesyetemname: "$sourcesyetemname",
                    architeuturalstyle: "$architeuturalstyle",
                    CountyOrParish: "$CountyOrParish",
                    ListPrice: "$ListPrice",
                    PropertyCondition: "$PropertyCondition",
                    FMLS_AssociationRentRestrictionsYN: "$FMLS_AssociationRentRestrictionsYN",
                    SecurityFeatures: "$SecurityFeatures",
                    RoomBedroomFeatures: "$RoomBedRoomFeatures",
                    VirtualTourURLUnbranded: "$VirtualTourURLUnbranded",
                    DaysOnMarket: "$DaysOnMarket",
                    WaterBodyName: "$WaterBodyName",
                    Media: "$Media",
                    PropertyType: "$PropertyType",
                    ListingId: "$ListingId",
                    labels: "$labels",
                    BathroomsFull: "$BathroomsFull",
                    BathroomsHalf: "$BathroomsHalf",
                    City: 1,
                    PostalCode: 1
                }
            },
            { $sort: { [`${sorting}`]: sortBy } }
        ]).allowDiskUse(true).skip(startIndex)
            .limit(limit)
        results['data'] = data
        res.status(200).send(results)
    } catch (error: any) {
        console.log(error)
        res.status(400).send({ message: error.message });
    }

}

export default primaryFilters;



