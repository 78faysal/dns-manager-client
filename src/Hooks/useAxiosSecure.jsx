import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "https://dns-manager-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (user) {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          navigate(-1);
          return toast.error("You can't do this action!");
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
