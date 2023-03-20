import property from "../../schema/propertySchema";
import school from "../../schema/schoolSchema";


const searchpropertyWithSchool = async (req: any, res: any) => {
    const City = req.query.City;
    const CountyOrParish = req.query.CountyOrParish;
    try {
        let filters: any[] = []
        if (!City || !CountyOrParish) {
            res.status(400).send({ message: "enter the city name" })
        } else {
            filters.push({
                "City": City
            })
            filters.push({
                "CountyOrParish": CountyOrParish
            })

            const search = await property.aggregate([{
                $match: {
                    $and: filters
                }
            }])

            res.status(200).send({ data: search })
        }

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }

}



export default searchpropertyWithSchool
