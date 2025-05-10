import axios from "axios";
import { useEffect, useState } from "react";

 

const useJobs = () => {
    const [jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      axios.get('http://localhost:3000/jobs')
      .then(res=>{
        setJobs(res.data)
        setLoading(false)
      })
    },[])
    return {jobs,loading}
};

export default useJobs;