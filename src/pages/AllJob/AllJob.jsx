import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";

 
 
 const AllJob = () => {
    const [sort,setSort]=useState(false)
    // console.log(sort)
    const {jobs,loading}=useJobs(sort)
    if(loading){
       return <p className="text-5xl text-center text-red-500">Loading............</p>
    }
    return (
        <div className="p-5">
           <h1 className='text-4xl font-bold text-center'>All Job</h1> 
           <div className="flex items-center w-11/12">
              <button className={`btn btn-neutral ${sort && "btn-success"}`} onClick={()=>setSort(!sort)}>
               {sort == true?"sorted by salary":"sort by salary"}
              </button>
           </div>
           <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
 };
 
 export default AllJob;
