import api from "lib/api";
import { useQuery } from "react-query";

function GetSchoolRatingHigh({ HighSchool }) {
  const { isLoading: HighSchoolLoading, data: HighSchoolRating } = useQuery(
    ["HighSchoolRating", HighSchool], async () =>
    await api.get(`/schoolRatingForProperty?school=${HighSchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: HighSchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })

  return (
    <>
      {HighSchoolRating?.data?.RATING ? HighSchoolRating?.data?.RATING + "/10" : "N/A"}
    </>
  );
}

export default GetSchoolRatingHigh;
