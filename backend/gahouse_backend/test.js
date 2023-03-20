Skip to content


import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ObjectQueries({ queries,
    sortBy, setsortBy, sortOrder, setsortOrder, search, setsearch, page, setpage, numberOfRow, setnumberOfRow,
    CountyOrParish, setCountyOrParish, bathroom, setbathroom, BedroomsTotal, setBedroomsTotal,
    sortbathroom, setsortbathroom, sortBedroomsTotal, setsortBedroomsTotal, minPrice, setminPrice,
    maxPrice, setmaxPrice, sortListPrice, setsortListPrice }) {


    const router = useRouter()
    useEffect(() => {

        if (queries?.sortBy) {
            setsortBy(queries?.sortBy)
        }
        if (queries?.sortOrder) {
            setsortOrder(queries?.sortOrder)
        }
        if (queries?.search) {
            setsearch(queries?.search)
        }
        if (queries?.page) {
            setpage(queries?.page)
        }
        if (queries?.numberOfRow) {
            setnumberOfRow(queries?.numberOfRow)
        }
        if (queries?.CountyOrParish) {
            setCountyOrParish(queries?.CountyOrParish)
        }
        if (queries?.bathroom) {
            setbathroom(queries?.bathroom)
        }
        if (queries?.BedroomsTotal) {
            setBedroomsTotal(queries?.BedroomsTotal)
        }
        if (queries?.sortbathroom) {
            setsortbathroom(queries?.sortbathroom)
        }
        if (queries?.sortBedroomsTotal) {
            setsortBedroomsTotal(queries?.sortBedroomsTotal)
        }
        if (queries?.minPrice) {
            setminPrice(queries?.minPrice)
        }
        if (queries?.maxPrice) {
            setmaxPrice(queries?.maxPrice)
        }
        if (queries?.sortListPrice) {
            setsortListPrice(sortListPrice)
        }

        console.log("query changed")
        return () => {
        }
    }, [queries])

    useEffect(() => {
        let query
        query = {
            ...query, sortBy, sortOrder, search, page, numberOfRow,
            CountyOrParish, bathroom, BedroomsTotal,
            sortbathroom, sortBedroomsTotal, minPrice,
            maxPrice, sortListPrice
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

    }, [sortBy, sortOrder,
        search, page, numberOfRow,
        CountyOrParish, bathroom, BedroomsTotal,
        sortbathroom, sortBedroomsTotal, minPrice,
        maxPrice, sortListPrice])


}
