import axios from "axios";
import { useEffect } from "react";
 import useAuth from "./useAuth"
import { useNavigate } from "react-router-dom";
 
const axiosInstance = axios.create({
    baseURL:'https://job-portal-server-for-recruiter-part3-nu-nine.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
      const {signOutUser}=useAuth()
      const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        },error=>{
      
            if(error.status == 401 || error.status == 403){
              
                signOutUser()
                .then(()=>{
                 
                    navigate("/signIn")
                })
                .catch(error=>{
                 
                })
            }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance
};

export default useAxiosSecure;