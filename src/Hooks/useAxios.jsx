import axios from "axios";
import React from "react";
const axiosINstance = axios.create({
  baseURL: "https://sk-ill-hunt-server-side.vercel.app/",
});

const useAxios = () => {
  return axiosINstance;
};

export default useAxios;
