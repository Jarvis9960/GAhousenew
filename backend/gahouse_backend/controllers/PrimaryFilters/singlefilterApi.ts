import property from "../../schema/propertySchema";

const singleapi = async (req: any, res: any) => {

    const andfilter: any[] = [];

    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const minPrice: string = req.query?.minPrice;
    const maxPrice: string = req.query?.maxPrice;
    const MlsStatus: string = req.query?.MlsStatus;

    const andfilterObject: any = {}
    const arrdata = []
    const status = ["Active", "Active Under Contract", "Pending", "Hold", "Closed"]
    if (status.includes(MlsStatus)) {
        andfilterObject['MlsStatus'] = MlsStatus;
    }
    if (CountyOrParish && CountyOrParish !== "undefined") {

        andfilterObject['CountyOrParish'] = CountyOrParish;
    }
    if (BedroomsTotal && BedroomsTotal.trim() && BedroomsTotal !== "undefined") {
        andfilterObject['BedroomsTotal'] = { $regex: BedroomsTotal, $options: 'i', }
    }
    if (BathroomsTotalInteger && BathroomsTotalInteger.trim() && BathroomsTotalInteger !== "undefined") {
        andfilterObject['BathroomsTotalInteger'] = { $regex: BathroomsTotalInteger, $options: 'i', }

    } if (minPrice && minPrice !== "undefined") {
        andfilterObject['ListPrice'] = { $gte: minPrice }

    }
    if (maxPrice && maxPrice !== "undefined") {
        andfilterObject['ListPrice'] = { $lte: maxPrice }

    }

    console.log(andfilterObject, "andfilterObject")

    const ReportsLabels = [
        "bedroomMain", "gatedCommunities", "highRise", "investorProperties", "waterfront", "luxury", "primaryOnMain", "NewBuilds", "newProperty", "olderProperty", "recenltySoldProperty", "pools", "RanchHouse"
    ]
    const data = await Promise.all(ReportsLabels?.map(async (row) => {
        const res = await property.aggregate([{
            $match: {
                $and: [
                    { labels: { $elemMatch: { $eq: row } } },
                    andfilterObject

                ]
            }
        },
        { $count: "count" }])
        return { key: row, count: res[0] ? res[0].count : 0 }
    }
    ))

    res.status(200).send(data)

}

export default singleapi





