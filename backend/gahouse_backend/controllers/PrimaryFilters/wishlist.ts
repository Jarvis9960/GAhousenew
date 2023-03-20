

import property from "../../schema/propertySchema";
import * as mongoose from 'mongoose'
const d = new Date();
d.setMonth(-6)


const wishlistFilters = async (req: any, res: any) => {
    try {
        console.log("req.query", req.query)
        const andfilter: any[] = []
        const ids: string = req.query?.id
        if (ids?.split(",") && ids && ids.trim() && ids !== "undefined") {
            const idss = ids?.split(",")
            if (idss?.length > 0) {
                Promise.all(idss?.map(id => {
                    andfilter.push({ _id: new mongoose.Types.ObjectId(id) })
                }))
            } else {
                andfilter.push({ _id: new mongoose.Types.ObjectId(ids) })
            }
        } else {
            res.status(404).send()
        }

        console.log("andfilter", andfilter)
        const data = await property.aggregate([
            {
                $match: { $or: andfilter }
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
                    ListingId: { $first: "$ListingId" },
                    labels: { $first: "$labels" },
                    BathroomsFull: { $first: "$BathroomsFull" },
                    BathroomsHalf: { $first: "$BathroomsHalf" }

                }
            }
        ])
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

}

export default wishlistFilters;









