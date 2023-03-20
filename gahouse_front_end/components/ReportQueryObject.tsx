import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ReportObjectQueries({ queries, City, setCity,
    CountyOrParish, setCountyOrParish, BathroomsTotalInteger, setBathroomsTotalInteger, BedroomsTotal, setBedroomsTotal,
    minPrice, setminPrice, maxPrice, setmaxPrice }) {


    const router = useRouter()
    useEffect(() => {
        if (queries?.City) {
            setCity(queries.City)
        }
        if (queries?.CountyOrParish) {
            setCountyOrParish(queries?.CountyOrParish)
        }
        if (queries?.BathroomsTotalInteger) {
            setBathroomsTotalInteger(queries?.BathroomsTotalInteger)
        }
        if (queries?.BedroomsTotal) {
            setBedroomsTotal(queries?.BedroomsTotal)
        }
        if (queries?.minPrice) {
            setminPrice(queries?.minPrice)
        }
        if (queries?.maxPrice) {
            setmaxPrice(queries?.maxPrice)
        }

        console.log("query changed")
        return () => {
        }
    }, [queries])

    useEffect(() => {
        let query: any;
        query = {
            ...query,
            CountyOrParish, City, BathroomsTotalInteger, BedroomsTotal,
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

    }, [City, CountyOrParish, BathroomsTotalInteger, BedroomsTotal, minPrice, maxPrice])


}