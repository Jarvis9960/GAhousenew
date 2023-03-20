import property from "../../../schema/propertySchema";

const schools = async (req: any, res: any) => {

    const CountyOrParish = req.query.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    const minPrice: string = req.query?.minPrice;
    const maxPrice: string = req.query?.maxPrice;
    let page = req.query?.page;
    let sorting: any = { "ListingContractDate": -1 }

    const filters: any[] = []
    filters.push({
        ElementarySchool: {
            $ne: null
        },
        MiddleOrJuniorSchool: {
            $ne: null
        },
        HighSchool: {
            $ne: null
        }
    })
    if (CountyOrParish) {
        filters.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        filters.push({ BedroomsTotal: BedroomsTotalvalue })

    }
    if (BathroomsTotalInteger) {
        filters.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })

    } if (minPrice) {
        filters.push({ ListPrice: { $gte: minPrice } })
    }
    if (maxPrice) {
        filters.push({ ListPrice: { $lte: maxPrice } })
    }

    const count = await property.aggregate([{
        $match: {
            $and: filters
        }
    }, {
        $count: "count"
    }
    ])


    let pageNumber = 1
    let row = 15

    if (page && Number(page) > 0) {
        pageNumber = Number(page)

    }

    const results: any = { "next": 0, previous: 0, page: 1, total: 0, data: [] }
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

    const result = await property.aggregate([{
        $match: {
            $and: filters
        },

    },
    {
        "$sort": sorting
    }
    ])
    results['data'] = result

    res.status(200).send({ data: results });
}


export default schools
