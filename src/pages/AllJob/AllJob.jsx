import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";

 
 
 const AllJob = () => {
    const {jobs,loading}=useJobs()
    return (
        <div className="p-5">
           <h1 className='text-4xl font-bold text-center'>All Job</h1> 
           <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
 };
 
 export default AllJob;
