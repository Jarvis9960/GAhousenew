import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PropertyObjectQueries({ queries, school, setschool, showMap, setshowMap, PropertySubType, setPropertySubType, City, setCity, search, setsearch, page, setpage, numberOfRow, setnumberOfRow, report, setreport,
    CountyOrParish, setCountyOrParish, BathroomsTotalInteger, setBathroomsTotalInteger, BedroomsTotal, setBedroomsTotal,
    minPrice, setminPrice, maxPrice, setmaxPrice, ListingId, setListingId }) {


    const router = useRouter()
    useEffect(() => {
        if (queries.school) {
            setschool(queries?.school)
        } else {
            setschool("")
        }
        if (queries?.PropertySubType) {
            setPropertySubType(queries?.PropertySubType)
        } else {
            setPropertySubType("")
        }
        if (queries?.search) {
            setsearch(queries?.search)
        } else {
            setsearch("")
        }
        if (queries?.page) {
            setpage(queries?.page)
        } else {
            setpage=1
        }
        if (queries?.numberOfRow) {
            setnumberOfRow(queries?.numberOfRow)
        } else {
            setnumberOfRow(15)
        }
        if (queries?.report) {
            setreport(queries?.report)
        } else {
            setreport('')
        }
        if (queries?.City) {
            setCity(queries.City)
        } else {
            setCity("")
        }
        if (queries?.CountyOrParish) {
            setCountyOrParish(queries?.CountyOrParish)
        } else {
            setCountyOrParish("")
        }
        if (queries?.BathroomsTotalInteger) {
            setBathroomsTotalInteger(queries?.BathroomsTotalInteger)
        } else {
            setBathroomsTotalInteger("")
        }
        if (queries?.BedroomsTotal) {
            setBedroomsTotal(queries?.BedroomsTotal)
        } else {
            setBedroomsTotal("")
        }
        if (queries?.minPrice) {
            setminPrice(queries?.minPrice)
        } else {
            setminPrice("")
        }
        if (queries?.maxPrice) {
            setmaxPrice(queries?.maxPrice)
        } else {
            setmaxPrice("")
        }
        if (queries?.ListingId) {
            setListingId(queries?.ListingId)
        } else {
            setListingId("")
        }

        console.log("query changed")
        return () => {
        }
    }, [queries])

    useEffect(() => {
        let query: any;
        query = {
            ...query, PropertySubType, school, search, page, numberOfRow, report,
            CountyOrParish, City, BathroomsTotalInteger, BedroomsTotal, ListingId,
            minPrice,
            maxPrice
        }

        router.replace(
            {
                pathname: router.pathname,
                query: {
                    ...router.query, ...query
                }
            },
            undefined,
            { shallow: true }
        )

    }, [City, ListingId, school, PropertySubType, search, page, numberOfRow, report, CountyOrParish, BathroomsTotalInteger, BedroomsTotal, minPrice, maxPrice])


}