import { useRef, useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";
import { IoSearchOutline } from "react-icons/io5";


const AllJob = () => {
    const [sort, setSort] = useState(false)
    const [search,setSearch]=useState("")
    const clearDebounce = useRef(null)  

    // console.log(search)
    const { jobs, loading } = useJobs(sort,search)
    if (loading) {
        return <p className="text-5xl text-center text-red-500">Loading............</p>
    }
    
    const handleSearch=(e)=>{
        const sv=e.target.value
        if(clearDebounce.current){
            clearTimeout(clearDebounce.current)
        }
        clearDebounce.current=setTimeout(()=>{
            setSearch(sv)
        },500)
    }
    
    return (
        <div className="p-5">
            <h1 className='text-4xl font-bold text-center'>All Job</h1>
            <div className="flex items-center w-11/12 gap-5">
                <button className={`btn btn-neutral ${sort && "btn-success"}`} onClick={() => setSort(!sort)}>
                    {sort == true ? "sorted by salary" : "sort by salary"}
                </button>
                <div className="flex items-center input">
                    <IoSearchOutline />
                    <input type="text" placeholder="search by location" onChange={handleSearch} />
                </div>
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
