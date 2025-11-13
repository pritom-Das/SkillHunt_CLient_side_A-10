import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://sk-ill-hunt-server-side.vercel.app/",
});

const useSecureAxios = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const requestInstance = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    });

    return () => {
      instance.interceptors.request.eject(requestInstance);
    };
  }, [user]);

  return instance;
};

export default useSecureAxios;
