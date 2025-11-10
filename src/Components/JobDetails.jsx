import React, { useEffect } from "react";
import { useParams } from "react-router";
import useAxios from "../Hooks/useAxios";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const axiosINstance = useAxios();

  useEffect(() => {
    axiosINstance.get(`/jobs/${id}`).then((res) => {
      console.log("job from job details page", res.data);
    });
  }, [id]);
  return <div>this is job details page</div>;
};

export default JobDetails;
