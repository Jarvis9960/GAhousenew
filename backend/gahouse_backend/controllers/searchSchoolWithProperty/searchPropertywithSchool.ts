import school from "../../schema/schoolSchema";

const searchschoolWithProperty = async (req: any, res: any) => {


    const County = req.query.County;
    const CITIES = req.query.CITIES;

    const filter: any[] = []
    if (!County || !CITIES) {
        res.status(400).send({ message: "please enter the county and city" })
    } else {
        if (County) {
            filter.push({ County: County })
        }
        if (CITIES) {
            filter.push({ CITIES: CITIES })
        }

        console.log(filter)
        const result = await school.aggregate([
            {
                $match: {
                    $and: filter
                }
            }

        ])
        res.status(200).send({ data: result })


    }

    //db.movies.aggregate([
    //     {
    //         $search: {
    //             "autocomplete": {
    //                 "path": "title",
    //                     "query": "off"
    //             }
    //         }
    //     },
    //     {
    //         $limit: 10
    //     },
    //     {
    //         $project: {
    //             "_id": 0,
    //                 "title": 1
    //         }
    //     }
    // ])




}







export default searchschoolWithProperty