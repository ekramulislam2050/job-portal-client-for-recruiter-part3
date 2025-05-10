import axios from "axios";
import { useEffect, useState } from "react";

 

const useJobs = (sort,search) => {
  console.log(search)
    const [jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      axios.get(`http://localhost:3000/jobs?sort=${sort}&search=${search}`)
      .then(res=>{
        setJobs(res.data)
        setLoading(false)
      })
    },[sort,search])
    return {jobs,loading}
};

export default useJobs;