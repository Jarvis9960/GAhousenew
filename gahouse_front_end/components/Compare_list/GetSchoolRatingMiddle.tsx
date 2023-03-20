import api from "lib/api";
import { useQuery } from "react-query";

function GetSchoolRatingMiddle({ MiddleOrJuniorSchool }) {
  const { isLoading: MiddleOrJuniorSchoolLoading, data: MiddleOrJuniorSchoolRating } = useQuery(
    ["MiddleOrJuniorSchoolRating", MiddleOrJuniorSchool], async () =>
    await api.get(`/schoolRatingForProperty?school=${MiddleOrJuniorSchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: MiddleOrJuniorSchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })

  return (
    <>
      {MiddleOrJuniorSchoolRating?.data?.RATING ? MiddleOrJuniorSchoolRating?.data?.RATING + "/10" : "N/A"}
    </>
  );
}

export default GetSchoolRatingMiddle;
