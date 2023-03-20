import property from "../../schema/propertySchema";

const featuredProperty = async (req: any, res: any) => {
    const label = req.query.label;
    const id = req.params.id;
    console.log(id)

    if (!label) {
        res.status(400).send({ message: "enter the lable you want" })
    } else {
        const findproperty = await property.findOne({ _id: id });
        console.log(findproperty?.label)
        const labelheck = findproperty?.label.includes(label);
        if (labelheck) {
            res.status(200).send({ message: `the given property is already ${label}` })
        } else {
            const updateLabel = await property.findOneAndUpdate({ _id: id }, { $set: { label: label } }, { new: true });


            res.send({ data: updateLabel, message: "this is the label data" })
        }


    }
}

export default featuredProperty;