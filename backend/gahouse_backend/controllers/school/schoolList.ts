import property from "../../schema/propertySchema";
import school from "../../schema/schoolSchema";

const schoolList = async (req: any, res: any) => {


    let page: number = req.query?.page || 1;
    const sortBy: string = req.query?.sortBy;
    const sortOrder: string = req.query?.sortOrder;
    const County: string = req.query?.County;
    const CITIES: string = req.query?.CITIES;
    const types: string = req.query?.type;
    const rating: string = req.query?.rating;
    const schoolName: string = req.query?.school;
    // console.log(County)
    // console.log(CITIES)
    let andfilter: any[] = [{ _id: { $ne: null } }]
    if (County) {
        andfilter.push({ County: County })
    }
    if (CITIES) {
        andfilter.push({ CITIES: CITIES })
    }
    if (types) {
        andfilter.push({ TYPE: { $regex: types, $options: "i" } })
    }
    if (rating) {
        andfilter.push({ "$expr": { "$gte": [{ "$toInt": "$RATING" }, Number(rating)] } })
        // andfilter.push({ RATING: { $gte: rating } })
    }
    if (schoolName) {
        andfilter.push({ SCHOOL_NAME: { $regex: schoolName, $options: "i" } })
    }

    console.log(andfilter)

    const count = await school.aggregate([
        { $match: { $and: andfilter } },
        { $count: 'count' }])

    let pageNumber = 1
    let row = 20
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
    const sorting: any = { "CITIES": 1 }


    const data = await school.aggregate([
        {
            $match: { $and: andfilter }
        },
        {
            $sort: sorting,
        },
    ]).skip(startIndex)
        .limit(limit);
    const newData = await Promise.all(
        data.map(async (d) => {
            const ElementarySchool = { "ElementarySchool": d?.FMLS_VALUE }
            const MiddleOrJuniorSchool = { "MiddleOrJuniorSchool": d?.FMLS_VALUE }
            const HighSchool = { "HighSchool": d?.FMLS_VALUE }
            let school: any;
            if (d.TYPE == "Elementary") {
                school = ElementarySchool;
            } else if (d.TYPE == "Middle") {
                school = MiddleOrJuniorSchool
            } else if (d.TYPE == "High") {
                school = HighSchool
            }
            const bedroomMain = await property.aggregate([{
                $match: school
            },
            { $count: "count" }])
            d['properties'] = bedroomMain[0] ? bedroomMain[0].count : 0
            return d
        })
    )
    results['data'] = newData
    res.status(200).send(results);

}

export default schoolList;