import property from "../../schema/propertySchema";


const labels = ["Featured",
    "Recommanded",
    "bedroomMain",
    "gatedCommunities",
    "highRise",
    "investorProperties",
    "waterfront",
    "luxury",
    "primaryOnMain",
    "NewBuilds",
    "newProperty",
    "olderProperty",
    "recenltySoldProperty",
    "pools",
    "RanchHouse"
]
const UpdateLabel = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const label = req.query.label;
        if (!labels.includes(label)) {
            res.status(404).send("invalid label");
            return;
        }
        const propertyExist = await property.findById(id, { _id: 1, labels: 1 })
        const labelExist: any = propertyExist?.labels
        if (labelExist.includes(label)) {
            res.status(202).send("label already exist");
            return;
        }
        const data = await property.findByIdAndUpdate(propertyExist?._id, { $push: { labels: label } });
        res.status(200).send("added label")
        return;
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

}

const RemoveLabel = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const label = req.query.label;
        if (!labels.includes(label)) {
            res.status(404).send("invalid label");
            return;
        }
        const propertyExist = await property.findById(id, { _id: 1, labels: 1 })
        const labelExist: any = propertyExist?.labels
        if (!labelExist.includes(label)) {
            res.status(202).send("label not exist");
            return;
        }
        const newLabels = Promise.all(labelExist?.map((l: string) => l != label))
        const data = await property.findByIdAndUpdate(propertyExist?._id, { $set: { labels: newLabels } });
        res.status(200).send("added label")
        return;
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

}

export default UpdateLabel;









