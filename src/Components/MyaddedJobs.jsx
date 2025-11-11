import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";

const MyaddedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get(`/myadded-jobs?email=${user?.email}`).then((res) => {
      console.log("my added jobs", res.data);
    });
  }, [user?.email]);
  return <div>My added jobs</div>;
};

export default MyaddedJobs;
