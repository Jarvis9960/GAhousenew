import property from "../../../schema/propertySchema";


const sevendaysorlessProperty = async (req: any, res: any) => {
    const andfilters: any[] = [];
    const CountyOrParish: string = req.query?.CountyOrParish;
    const BedroomsTotal: string = req.query?.BedroomsTotal;
    const BedroomsTotalvalue: string = req.query?.BedroomsTotalvalue;
    const BathroomsTotalInteger: string = req.query?.BathroomsTotalInteger;
    const BathroomsTotalIntegervalue: string = req.query?.BathroomsTotalIntegervalue;
    const page: string = req.query?.page;


    let sorting: any = { "ListingContractDate": -1 }
    if (CountyOrParish) {
        andfilters.push({ CountyOrParish: CountyOrParish })
    }
    if (BedroomsTotal) {
        andfilters.push({ BedroomsTotal: BedroomsTotalvalue })

    }
    if (BathroomsTotalInteger) {
        andfilters.push({ BathroomsTotalInteger: BathroomsTotalIntegervalue })

    }
    console.log(andfilters)
    andfilters.push({ DaysOnMarket: { $lte: 7 } })

    const count = await property.aggregate([
        { $match: { $and: andfilters } },
        { $count: 'count' }])

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
            $and: andfilters
        },
    }, {
        "$sort": sorting
    }
], 
{
        collation: {
            locale: "en_US",

            numericOrdering: true
        }
    }

    )

    results['data'] = result
    res.status(200).send({ data: results })
}


export default sevendaysorlessProperty;