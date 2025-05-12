import axios from "axios";
import { useEffect, useState } from "react";

 

const useJobs = (sort,search,min,max) => {

    const [jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      axios.get(`http://localhost:3000/jobs?sort=${sort}&search=${search}&min=${min}&max=${max}`)
      .then(res=>{
        setJobs(res.data)
        setLoading(false)
      })
    },[sort,search,min,max])
    return {jobs,loading}
};

export default useJobs;