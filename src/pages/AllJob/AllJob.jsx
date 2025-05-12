import { useRef, useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";
import { IoSearchOutline } from "react-icons/io5";


const AllJob = () => {
    const [sort, setSort] = useState(false)
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [search, setSearch] = useState("")
    const clearDebounce = useRef(null)

  
    const { jobs, loading } = useJobs(sort, search, min, max)
    if (loading) {
        return <p className="text-5xl text-center text-red-500">Loading............</p>
    }

    const debounce = (setToState ) => {
    
            if (clearDebounce.current) {
                clearTimeout(clearDebounce.current)
            }
            clearDebounce.current = setTimeout(setToState, 500)
    }
  
    
   const handleSearch=(e)=>{
        const value = e.target.value
        debounce(()=>setSearch(value))
   }
   const handleMin=(e)=>{
     const value = e.target.value
     debounce(()=>setMin(value))
   }
   const handleMax=(e)=>{
     const value = e.target.value
     debounce(()=>setMax(value))
   }



    return (
        <div className="p-5">
            <h1 className='text-4xl font-bold text-center'>All Job</h1>
            <div className="flex items-center w-11/12 gap-5">
                <button className={`btn btn-neutral ${sort && "btn-success"}`} onClick={() => setSort(!sort)}>
                    {sort == true ? "sorted by salary" : "sort by salary"}
                </button>
                <div className="flex items-center w-full max-w-2xl pb-2 border border-black input">
                    <IoSearchOutline />
                    <input type="text" placeholder="search by location" onChange={handleSearch} className="w-full max-w-2xl" />
                </div>
                <div className="flex flex-col items-center w-full max-w-2xl gap-2 pb-2">

                    <input type="text" placeholder="search by min-salary" onChange={ handleMin} className="w-full max-w-sm border border-black input" />
                    <input type="text" placeholder="search by max-salary" onChange={ handleMax} className="w-full max-w-sm border border-black input" />
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
