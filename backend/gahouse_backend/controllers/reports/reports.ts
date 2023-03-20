import property from "../../schema/propertySchema";


const reports = async (req: any, res: any) => {
    let filters: any[] = [];

    const RanchHouse = req.query?.RanchHouse;
    const gatedCommunities = req.query?.gatedCommunities;
    const masterOrmain = req.query?.masterOrmain;
    const waterfront = req.query?.waterfront;
    const highRise = req.query?.highRise;
    const luxuryHomes = req.query?.luxuryHomes
    const NewBuilds = req.query?.NewBuilds
    const olderProperty = req.query?.olderProperty;
    const pools = req.query?.pools;
    const recenltySoldProperty = req.query?.recenltySoldProperty


    const newProperty = req.query?.newProperty;
    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    const page: string = req.query?.page;
    const minPrice: string = req.query?.minPrice;
    const maxPrice: string = req.query?.maxPrice;


    const andfilterObject: any = {}


    if (CountyOrParish) {
        andfilterObject['CountyOrParish'] = CountyOrParish;
    }
    if (BedroomsTotal) {
        andfilterObject['BedroomsTotal'] = BedroomsTotalvalue


    }
    if (BathroomsTotalInteger) {
        andfilterObject['BathroomsTotalInteger'] = BathroomsTotalIntegervalue


    } if (minPrice) {
        andfilterObject['ListPrice'] = { $gte: minPrice }

    }
    if (maxPrice) {
        andfilterObject['ListPrice'] = { $gte: maxPrice }

    }

    console.log(andfilterObject)


    if (RanchHouse) {
        filters.push({
            ArchitecturalStyle: {
                $elemMatch: {
                    $in: ["Ranch"]
                }
            }

        }, andfilterObject)
    }
    if (gatedCommunities) {
        filters.push({
            SecurityFeatures: {
                $elemMatch: {
                    $in: ["Gated Community", "Security Gate", "Security Service"]
                }
            }
        })
    }
    if (masterOrmain) {
        filters.push({
            RoomBedroomFeatures: {
                $elemMatch: {

                    $in: ["Master On Main Level", "Master on Main"]

                }
            }
        })
    }

    if (waterfront) {
        filters.push({
            "WaterBodyName": {
                $ne: "None"
            }
        })
    }
    if (highRise) {
        filters.push({
            "ArchitecturalStyle": {
                $elemMatch: {
                    $in: ["High Rise", "High Rise (6 or more stories)"]
                }
            }
        })
    }

    if (luxuryHomes) {
        filters.push({ ListPrice: { $gte: '749999' } })
    }

    if (NewBuilds) {
        filters.push({
            PropertyCondition: {
                $elemMatch: {
                    $in: ["To Be Built", "New Construction"]
                }
            }
        })
    }
    if (olderProperty) {
        filters.push({
            DaysOnMarket: { $gte: 30 }
        })
    }


    if (pools) {
        filters.push({
            "PoolPrivateYN": "true"
        })
    }
    const d = new Date();
    d.setMonth(-6)
    if (recenltySoldProperty) {
        filters.push({
            CloseDate: {
                $gte: d
            }
        })
    }
    // filters.push(andfilterObject)
    if (filters.length == 0) {
        res.status(400).send({ message: "enter atleast one value  to get the data" })
    } else {

        console.log(filters)
        const result = await property.aggregate([{
            $match: {
                $and: filters
            }
        }])

        res.status(200).send({ data: result })
    }




}

export default reports;