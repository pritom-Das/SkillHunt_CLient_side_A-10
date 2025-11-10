import axios from "axios";
import React from "react";
const axiosINstance = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxios = () => {
  return axiosINstance;
};

export default useAxios;
