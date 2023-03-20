import property from "../../schema/propertySchema";
import { Query } from "../../Interface/queryInterface";

const queryData = async (req: any, res: any) => {
    try {
        const data = req.query;
        let values = [];
        const sortby = req.query.sortby;
        const sortbyAceDec = req.query.sortbyAceDec;
        let sorting: any = {};
        if (sortby) {
            if (sortbyAceDec) {
                sorting[sortby] = Number(sortbyAceDec);
            } else {
                sorting[sortby] = -1;
            }
        } else {
            sorting = { createdAt: -1 };
        }


        for (let items in data) {
            values.push(items)
        }
        const valuestostring = values.toString();

        const propertydetails = await property.aggregate([
            {
                $match: {
                    $text: {
                        $search: valuestostring,
                        $caseSensitive: false
                    }
                },
            },
            { $sort: sorting },


            {
                $limit: 5
            }
        ])
        res.send({ data: propertydetails })
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "data is " })
    }

}
export default queryData;