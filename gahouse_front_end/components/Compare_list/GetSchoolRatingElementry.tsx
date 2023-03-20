import api from "lib/api";
import { useQuery } from "react-query";

function GetSchoolRatingElementry({ ElementarySchool }) {
  const { isLoading: ElementarySchoolLoading, data: ElementarySchoolRating } = useQuery(
    ["ElementarySchoolRating", ElementarySchool], async () =>
    await api.get(`/schoolRatingForProperty?school=${ElementarySchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: ElementarySchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })

  return (
    <>
      {ElementarySchoolRating?.data?.RATING ? ElementarySchoolRating?.data?.RATING + "/10" : "N/A"}
    </>
  );
}

export default GetSchoolRatingElementry;
