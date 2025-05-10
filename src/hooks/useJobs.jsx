import axios from "axios";
import { useEffect, useState } from "react";

 

const useJobs = (sort) => {
  // console.log(sort)
    const [jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      axios.get(`http://localhost:3000/jobs?sort=${sort}`)
      .then(res=>{
        setJobs(res.data)
        setLoading(false)
      })
    },[sort])
    return {jobs,loading}
};

export default useJobs;